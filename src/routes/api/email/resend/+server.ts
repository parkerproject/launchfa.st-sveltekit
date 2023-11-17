import redis from '@/lib/db/upstash'
import resend from '@/lib/email/resend'
import isAdmin from '@/lib/utils/admin'
import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

export async function POST(event: RequestEvent) {
  // Parse the JSON data from the request body
  const context = await event.request.json()
  // Check if the 'resend' module is available
  if (!resend) {
    // If 'resend' is not available, return a 500 Internal Server Error response
    throw error(500)
  }
  // Check if the requester is an admin
  if (!isAdmin(event.request)) {
    // If the requester is not an admin, return a 403 Forbidden response
    throw error(403)
  }
  // Send an email using Resend
  // Read more on https://resend.com/docs/api-reference/emails/send-email
  const mail = await resend.emails.send({
    text: context.text,
    subject: context.subject,
    from: 'Rishi Raj Jain <emails@rishi.app>',
    to: typeof context.to === 'string' ? [context.to] : context.to,
  })
  // Store the email's ID sent in your Redis
  // if (redis && mail) {
  //   await redis.rpush('emails', mail.id)
  // }
  // Return a successful response with a status code of 200
  return json({}, { status: 200 })
}

// A function to get an email from it's Resend Generated ID
// Read more on https://resend.com/docs/api-reference/emails/retrieve-email
export async function GET(event: RequestEvent) {
  const xEmailID = event.request.headers.get('x-email-id')
  // Check if the 'x-email-id' header is missing
  if (!xEmailID) {
    // If the header is missing, return a 400 Bad Request response
    throw error(400)
  }
  // Check if the 'redis' module is available
  if (redis) {
    // Retrieve the email using Resend's 'get' method
    const email = await resend.emails.get(xEmailID)
    // Return the email as a JSON response with a status code of 200
    return json({ email })
  }
  // If 'redis' is not available, return a 500 Internal Server Error response
  return error(500)
}
