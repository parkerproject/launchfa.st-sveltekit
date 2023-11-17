import { Resend } from 'resend'
import { env } from '$env/dynamic/private'

export default new Resend(env.RESEND_KEY)
