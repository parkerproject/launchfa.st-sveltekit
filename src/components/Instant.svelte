<script lang="ts">
  /*
    A component that can be used anywhere in your app to speed your transitions instantly
    Add this to the bottom of the page if you want to use it globally

    <Instant />
  */

  import { onMount } from 'svelte'

  onMount(() => {
    const s = document.createElement('script')
    s.src = 'https://instant.page/5.2.0'
    s.type = 'module'
    s.integrity = 'sha384-jnZyxPjiipYXnSU0ygqeac2q7CVYMbh84q0uHVRRxEtvFPiQYbXWUorga2aqZJ0z'
    document.body.appendChild(s)
  })
</script>
