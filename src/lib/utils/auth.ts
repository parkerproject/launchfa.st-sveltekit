import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import redis from '../db/upstash'
import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'

// Generate a random token
export function generateRandomToken() {
  return crypto.randomBytes(20).toString('hex')
}

// Generate a random string based on an input value
export function generateRandomString(inputValue: string) {
  return crypto.createHash('sha256').update(String(inputValue)).digest('hex')
}

// Set the password for a given email in Redis
export async function setPassword(email: string, password: string) {
  return await redis.hset('login', { [email]: password })
}

// Get the password for a given email from Redis
export async function getPassword(email: string) {
  return await redis.hget('login', email)
}

// Hash a password using bcrypt
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10)
}

// Compare a password with its hash using bcrypt
export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash)
}

// Create a JWT (JSON Web Token) cookie with an expiration of 1 hour
export function createCookie(body) {
  return jwt.sign(body, env.SECRET_KEY, { expiresIn: '1 hour' })
}

// Decode a JWT cookie
export function decodeCookie(token: string) {
  try {
    return jwt.verify(token, env.SECRET_KEY)
  } catch (error) {
    return null
  }
}

// Parse cookies from a cookie header
export function parseCookies(cookieHeader: any) {
  const cookies = {}
  if (cookieHeader && typeof cookieHeader === 'string') {
    cookieHeader.split(';').forEach((cookie) => {
      const parts = cookie.split('=')
      if (parts.length === 2) {
        const name = parts[0].trim()
        const value = parts[1].trim()
        cookies[name] = value
      }
    })
  }
  return cookies
}

// Get the user session based on a JWT cookie from a request
export function getSession(request: Request) {
  try {
    const session = {}
    const cookies = parseCookies(request.headers.get('Cookie'))
    if (cookies && cookies['custom_auth']) {
      const decodedCookieValue = decodeCookie(cookies['custom_auth'])
      if (decodedCookieValue && new Date(decodedCookieValue.exp * 1000).getTime() >= new Date().getTime()) {
        session['email'] = decodedCookieValue.email
        if (decodedCookieValue['name']) {
          session['name'] = decodedCookieValue.name
        }
        if (decodedCookieValue['picture']) {
          session['picture'] = decodedCookieValue.picture
        }
        if (decodedCookieValue['google']) {
          session['google'] = decodedCookieValue.google
        }
        return session
      }
    }
  } catch (e) {
    console.log(e.message || e.toString())
  }
}

// Sign up a user by setting their password, creating a JWT cookie, and redirecting to an email send endpoint
export async function signUp(email: string, password: string) {
  await setPassword(email, password)
  const cookie = createCookie({ email })
  return json(
    {},
    {
      status: 302,
      headers: {
        Location: '/api/email/verify/send',
        'Set-Cookie': `custom_auth=${cookie}; Path=/; HttpOnly`,
      },
    },
  )
}
