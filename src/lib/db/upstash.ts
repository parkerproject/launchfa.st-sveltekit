import { Redis } from '@upstash/redis'
import { env } from '$env/dynamic/private'

export default new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
})
