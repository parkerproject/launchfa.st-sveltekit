// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  interface Window {
    // crisp global selector
    $crisp: any
    // google analytics data layer
    dataLayer: any
    // Lemon Squeezy window object
    LemonSqueezy: any
    // crisp enabled flag
    enabled_crisp: any
    // posthog enabled flag
    enabled_posthog: any
    // Lemon Squeezy flag
    hasLemonSqueezy: any
    // crsip ID
    CRISP_WEBSITE_ID: any
    // Lemon Squeezy instance
    createLemonSqueezy: any
  }
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
