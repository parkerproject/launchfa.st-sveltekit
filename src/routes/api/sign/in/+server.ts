import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'
import { getSession, generateRandomString, comparePassword, createCookie, getPassword, hashPassword } from '@/lib/utils/auth'

export async function POST(event: RequestEvent) {
  // Parse the incoming form data from the 'request'
  const context = await event.request.formData()
  // Check if form data exists
  if (!context) {
    // If no form data is found, return a 400 Bad Request response
    throw error(400, { message: 'Redis is not available.' })
  }
  // Extract the user's email and password from the form data
  const userEmail = context.get('email')
  const userPassword = context.get('password')
  // Check if both email and password are provided
  if (!userEmail || !userPassword) {
    // If either email or password is missing, return a 400 Bad Request response
    throw error(400, { message: 'No user details submitted.' })
  }
  // Generate a randomized password based on the user's input password
  const randomizedPassword = generateRandomString(userPassword)
  // Get the user session from the 'request'
  const session = getSession(event.request)
  // Check if no session is found (user is not logged in)
  if (!session) {
    // Attempt to retrieve the original password associated with the user's email
    const originalPassword = await getPassword(userEmail)
    // Sign In Flow
    if (originalPassword) {
      // Hash the randomized password
      const hashedPassword = await hashPassword(randomizedPassword)
      // Compare the hashed randomized password with the original password
      const isPasswordCorrect = await comparePassword(originalPassword, hashedPassword)
      if (isPasswordCorrect) {
        // If the passwords match, create a session cookie for the user
        const cookie = createCookie({ email: userEmail })
        // Return a redirect response with a status code of 302 and the session cookie
        return json(
          {},
          {
            status: 302,
            headers: {
              Location: '/',
              'Set-Cookie': `custom_auth=${cookie}; Path=/; HttpOnly`,
            },
          },
        )
      } else {
        // If the passwords don't match, return a 401 Unauthorized response
        return json(
          {},
          {
            status: 302,
            headers: {
              Location: '/signup',
            },
          },
        )
      }
    } else {
      // If the original password is not found, return a 404 Not Found response
      return json(
        {},
        {
          status: 302,
          headers: {
            Location: '/signup',
          },
        },
      )
    }
  } else {
    // If a session is found (user is already logged in), return a redirect response with a status code of 302
    return json(
      {},
      {
        status: 302,
        headers: {
          Location: '/',
        },
      },
    )
  }
}
