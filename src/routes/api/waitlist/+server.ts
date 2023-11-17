import redis from '@/lib/db/upstash'
import isAdmin from '@/lib/utils/admin'
import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

export async function POST(event: RequestEvent) {
  // Parse the incoming form data from the 'request'
  const context = await event.request.formData()
  // Extract the 'email' from the form data
  const email = context.get('email')
  // Check if 'email' is missing in the form data
  if (!email) {
    // If 'email' is missing, return a 400 Bad Request response
    throw error(400)
  }
  // Check if the 'redis' module is available
  if (redis) {
    // Add the 'email' to the waitlist in Redis
    await redis.rpush('waitlist', email)
    // Return a successful response with a status code of 200
    return json({})
  }
  // If 'redis' is not available, return a 500 Internal Server Error response
  throw error(500)
}

export async function GET(event: RequestEvent) {
  // Check if the requester is an admin
  if (!isAdmin(event.request)) {
    // If the requester is not an admin, return a 403 Forbidden response
    throw error(403)
  }
  // Check if the 'redis' module is available
  if (redis) {
    // Retrieve the waitlist from Redis
    const list = await redis.lrange('waitlist', 0, -1)
    // Return the waitlist as a JSON response with a status code of 200
    return json({ list })
  }
  // If 'redis' is not available, return a 500 Internal Server Error response
  throw error(500)
}
