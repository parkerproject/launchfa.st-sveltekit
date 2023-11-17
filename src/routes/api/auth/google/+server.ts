import { json } from '@sveltejs/kit'
import oauth2Client from '@/lib/google/oauth2'

export async function GET() {
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'openid email profile',
    prompt: 'consent',
  })
  return json(
    {},
    {
      status: 302,
      headers: {
        Location: authorizationUrl,
      },
    },
  )
}
