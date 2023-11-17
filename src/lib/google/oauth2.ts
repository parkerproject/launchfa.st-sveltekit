import { google } from 'googleapis'
import { env } from '$env/dynamic/private'

const oauth2Client = new google.auth.OAuth2(env.GOOGLE_AUTH_ID, env.GOOGLE_AUTH_SECRET, env.GOOGLE_AUTH_CALLBACK_URL)

export default oauth2Client
