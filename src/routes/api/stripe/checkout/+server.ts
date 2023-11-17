import Stripe from 'stripe'
import { env } from '$env/dynamic/private'
import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'
import { parseCookies } from '@/lib/utils/auth'

export async function POST(event: RequestEvent) {
  if (!env.STRIPE_SECRET_KEY) {
    throw error(500)
  }
  let metadata = {}
  const cookies = parseCookies(event.request.headers.get('Cookie'))
  if (cookies && cookies['reflioData']) {
    try {
      const tmp = JSON.parse(cookies['reflioData'])
      metadata = { reflio_referral_id: tmp['referral_id'] }
    } catch (e) {}
  }
  const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })
  const session = await stripe.checkout.sessions.create({
    metadata,
    mode: 'payment',
    payment_method_configuration: 'pmc_1O2qH3SE9voLRYpuz5FLmkvn',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'usd',
          product: 'prod_OqWkk7Rz9Yw18f',
          unit_amount: Math.round(150 * 100),
        },
      },
    ],
    discounts: [
      {
        coupon: 'M0OTIWMA',
      },
    ],
    custom_fields: [
      {
        type: 'text',
        key: 'github',
        optional: true,
        label: {
          type: 'custom',
          custom: 'GitHub Username',
        },
      },
    ],
    cancel_url: 'https://www.launchfa.st',
    success_url: 'https://www.launchfa.st',
  })
  if (session.url) {
    return json(
      {},
      {
        status: 303,
        headers: {
          Location: session.url,
        },
      },
    )
  } else {
    throw error(500, { message: 'failed to create a checkout url' })
  }
}
