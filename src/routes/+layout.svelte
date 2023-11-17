<script lang="ts">
  import '@/app.css'
  import Crisp from '@/components/Crisp.svelte'
  import Header from '@/components/Header.svelte'
  import Footer from '@/components/Footer.svelte'
  import Pirsch from '@/components/Pirsch.svelte'
  import Divider from '@/components/Divider.svelte'
</script>

<Header />
<Divider className="mt-3 border-gray-100/10" />
<slot />
<Divider className="mt-3 border-gray-100/10" />
<Footer twitter="rishi_raj_jain_" brand_name="launchfa.st" />
<Crisp CRISP_WEBSITE_ID="c3341803-a246-4aa6-93f0-e1049480a5f8" />
<Pirsch DATA_ID="c27typUzqqEbIT3JgD8GMiuJhbzuvyDE" />
