import nodemailer from 'nodemailer'
import isAdmin from '@/lib/utils/admin'
import { env } from '$env/dynamic/private'
import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

export async function POST(event: RequestEvent) {
  // Parse the JSON data from the request body
  const context = await event.request.json()
  // Check if the 'nodemailer' module is available
  if (!nodemailer) {
    // If 'nodemailer' is not available, return a 500 Internal Server Error response
    throw error(500)
  }
  // Check if the requester is an admin
  if (!isAdmin(event.request)) {
    // If the requester is not an admin, return a 403 Forbidden response
    throw error(403)
  }
  // Send an email using nodemailer
  // https://www.smtp2go.com/setupguide/node-js-script/
  const smtpTransport = nodemailer.createTransport({
    host: 'mail.smtp2go.com',
    auth: {
      user: env.SMTP2GO_USERNAME,
      pass: env.SMTP2GO_PASSWORD,
    },
    port: 2525, // 8025, 587 and 25 can also be used.
  })
  smtpTransport.sendMail({
    text: context.text,
    subject: context.subject,
    from: context['verified_sender'] ?? 'jain71000@gmail.com',
    to: typeof context.to === 'string' ? [context.to] : context.to,
  })
  // Return a successful response with a status code of 200
  return json({}, { status: 200 })
}
