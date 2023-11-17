import { error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'
import { getSession } from '@/lib/utils/auth'

export async function load(event: RequestEvent) {
  const session = getSession(event.request)
  if (!session) {
    throw error(403, { message: 'Unauthorized' })
  }
  return session
}
