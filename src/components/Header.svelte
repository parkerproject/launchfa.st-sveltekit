<script lang="ts">
  /*
    A component that can be used anywhere in your app

    <Header logo="https://rishi.app/static/favicon-image.jpg" />
  */

  export let logo: string = '/purple-icon.png'

  import { slug } from 'github-slugger'
  import IconCross from './Icon-Cross.svelte'
  import IconHamburger from './Icon-Hamburger.svelte'
  import ButtonCheckout from './Button-Checkout.svelte'

  const header = {
    viewID: slug('header'),
    labelID: 'view-' + slug('header'),
  }

  const css = `<style>
#${header['viewID']} {
  display: none;
}
#${header['labelID']}:checked + #${header['viewID']} {
  display: flex;
}
</style>`
</script>

<div class="relative mx-auto flex max-w-7xl flex-row items-center justify-between px-8 pt-2">
  <a href="/" class="flex flex-row items-center gap-x-2">
    <img alt="LaunchFast Logo" height="30" width="30" src={logo} class="h-[30px] w-[30px] rounded-full bg-gray-100" loading="lazy" />
    <span class="text-2xl font-semibold text-launchfast">LaunchFast</span>
  </a>
  <div class="hidden flex-row items-center gap-x-8 sm:flex">
    <a class="text-gray-800 hover:text-launchfast hover:underline" href="/#pricing">Pricing</a>
    <a class="text-gray-800 hover:text-launchfast hover:underline" href="/#demo">Demo</a>
    <ButtonCheckout minimal={true} />
  </div>
  <label class="rounded-full border p-2 sm:hidden" for={header.labelID}>
    <IconHamburger />
  </label>
  <input class="hidden" type="checkbox" id={header.labelID} />
  <div
    id={header.viewID}
    class="absolute right-0 top-0 z-20 flex h-screen w-[250px] flex-col overflow-hidden border-l bg-white shadow-2xl transition-all duration-300 ease-in-out sm:!hidden"
  >
    <div class="flex flex-row items-center justify-between border-b px-5 py-2">
      <span>Menu</span>
      <label class="rounded-full border p-2" for={header.labelID}>
        <IconCross />
      </label>
    </div>
    <div class="flex flex-col gap-y-4 p-5">
      <a href="/" class="text-xl font-semibold text-launchfast">Home</a>
      <a href="/#pricing" class="text-xl">Pricing</a>
      <a href="/#demo" class="text-xl">Demo</a>
      <ButtonCheckout minimal={true} />
    </div>
  </div>
</div>

<!-- {@html `<style>${css}</style>`} -->
