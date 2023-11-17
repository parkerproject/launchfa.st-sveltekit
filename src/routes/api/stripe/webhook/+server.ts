import { json, error } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

// Stripe API Reference
// https://stripe.com/docs/webhooks#webhook-endpoint-def
export async function POST(event: RequestEvent) {
  try {
    const event_ = await event.request.json()
    // Handle the event_
    switch (event_.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event_.data.object
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break
      }
      case 'payment_method.attached': {
        const paymentMethod = event_.data.object
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break
        // ... handle other event_ types
      }
      default: {
        console.log(`Unhandled event_ type ${event_.type}`)
      }
    }
    // Return a response to acknowledge receipt of the event_
    return json({ message: 'received' })
  } catch (e) {
    throw error(500, { message: e.message || e.toString() })
  }
}
