<script lang="ts">
  /*
    A component that can be used anywhere in your app

    <CTA />
  */

  import ButtonCheckout from './Button-Checkout.svelte'
</script>

<div class="relative flex h-screen w-screen flex-col items-center justify-center">
  <img alt="Cover" loading="lazy" src="https://rishi.app/static/favicon-image.jpg" class="absolute left-0 top-0" />
  <div class="flex max-w-[300px] flex-col items-center space-y-3">
    <h1>Boost Your App</h1>
    <h2>Some tagline here</h2>
    <ButtonCheckout />
  </div>
</div>
