import redis from '@/lib/db/upstash'
import isAdmin from '@/lib/utils/admin'
import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

// A function to get list of all emails' ID sent
// Use this to extract each email via GET request to
// /email with the header 'x-email-id' of one of the IDs retrieved
export async function GET(event: RequestEvent) {
  if (!isAdmin(event.request)) {
    throw error(403)
  }
  if (redis) {
    const list = await redis.lrange('emails', 0, -1)
    return json({ list })
  }
  throw error(500)
}
