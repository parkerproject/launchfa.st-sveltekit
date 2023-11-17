import { json } from '@sveltejs/kit'

export async function GET() {
  // Create a response that performs logout by setting an empty cookie with an expiration date in the past
  return json(
    {},
    {
      status: 302, // Redirect status code
      headers: {
        Location: '/', // Redirect to the home page
        'Set-Cookie': `custom_auth=""; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; HttpOnly`, // Clear the authentication cookie
      },
    },
  )
}
