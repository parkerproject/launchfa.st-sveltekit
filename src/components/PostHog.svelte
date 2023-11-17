<script lang="ts">
  /*
    A component that can be used anywhere in your app
    Add this to the bottom of the page if you want to use it globally

    <PostHog
      PH_ID='ph_123456789'
    />
  */

  import posthog from 'posthog-js'
  import { onMount } from 'svelte'

  export let PH_ID: string

  onMount(() => {
    if (PH_ID && PH_ID.length > 1 && window.enabled_posthog !== 1) {
      window.enabled_posthog = 1
      posthog.init(PH_ID, { api_host: 'https://app.posthog.com' })
    }
  })
</script>
