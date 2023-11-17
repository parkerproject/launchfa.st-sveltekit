<script lang="ts">
  /*
    A component that can be used anywhere in your app
    Add this to the bottom of the page if you want to use it globally

    <Pirsch
      DATA_ID='123456789'
    />
  */

  import { onMount } from 'svelte'

  export let DATA_ID: string

  onMount(() => {
    const s = document.createElement('script')
    s.src = 'https://api.pirsch.io/pirsch-extended.js'
    s.id = 'pirschextendedjs'
    s['data-code'] = DATA_ID
    document.body.appendChild(s)
  })
</script>
