import { env } from '$env/dynamic/private'

// A function to assess whether a user is admin based on the header value
export default function isAdmin(request: Request) {
  // const session = getSession(request)
  const xAccessKey = request.headers.get('x-access-key')
  if (xAccessKey) {
    return xAccessKey === env.PRIVATE_ACCESS_KEY
  }
  return false
}
