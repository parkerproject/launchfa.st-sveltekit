<script lang="ts">
  /*
    A component that can be used anywhere in your app
    Add this to the bottom of the page if you want to use it globally

    <GA
      TRACKING_ID="GA-ID-12345678"
    />
  */

  import { onMount } from 'svelte'

  export let TRACKING_ID: string

  function gtag() {
    window.dataLayer.push(arguments)
  }

  onMount(() => {
    if (TRACKING_ID && TRACKING_ID.length > 1) {
      const gaScript = document.createElement('script')
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`
      gaScript.onload = () => {
        window.dataLayer = window.dataLayer || []
        gtag('js', new Date())
        gtag('config', TRACKING_ID)
      }
      document.head.appendChild(gaScript)
    }
  })
</script>
