import redis from '@/lib/db/upstash'
import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'
import { getSession } from '@/lib/utils/auth'

export async function GET(event: RequestEvent) {
  // Check if the 'redis' module is available
  if (!redis) {
    // If 'redis' is not available, return a 500 Internal Server Error response
    throw error(500)
  }
  // Parse the URL from the 'request' object
  const url = new URL(event.request.url)
  // Extract the 'token' query parameter from the URL
  const token_from_url = url.searchParams.get('token')
  // Get the user session from the 'request'
  const session = getSession(event.request)
  // Check if a valid session exists
  if (session) {
    // Extract the 'email' property from the session
    const { email } = session
    // Check if 'email' exists
    if (email) {
      // Retrieve the stored token associated with the 'email' from the Redis database
      const token = await redis.hget('tokens', email)
      // Check if the retrieved token matches the 'token_from_url'
      if (token === token_from_url) {
        // If the tokens match, mark the user as approved in Redis
        await redis.hset('approved', { [email]: 1 })
        // Return a success response with a status code of 200
        return json({ message: 'verified' })
      }
      // If the tokens do not match, return an 'invalid token' response with a status code of 403
      throw error(403, { message: 'invalid token' })
    }
  }
  // If no valid session or email was found, return a 'could not verify' response with a status code of 500
  throw error(500, { message: 'could not verify' })
}
