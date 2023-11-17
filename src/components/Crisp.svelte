<script lang="ts">
  /*
    A component that can be used anywhere in your app
    Add this to the bottom of the page if you want to use it globally

    <Crisp CRISP_WEBSITE_ID="0000-0000-0000-0000"  />
  */

  import { onMount } from 'svelte'

  export let CRISP_WEBSITE_ID: string

  onMount(() => {
    if (!(window['enabled_crisp'] === 1)) {
      window.$crisp = []
      window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID
      const s = document.createElement('script')
      s.src = 'https://client.crisp.chat/l.js'
      document.body.appendChild(s)
      window['enabled_crisp'] = 1
    }
  })
</script>
