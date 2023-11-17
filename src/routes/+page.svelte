<script lang="ts">
  import Faq from '@/components/FAQ.svelte'
  import Divider from '@/components/Divider.svelte'
  import Pricing from '@/components/Pricing.svelte'
  import Features from '@/components/Features.svelte'
  import Testimonials from '@/components/Testimonials.svelte'
  import ButtonCheckout from '@/components/Button-Checkout.svelte'
</script>

<div class="mx-auto mt-12 flex max-w-[900px] flex-col items-center px-4 sm:mt-24 sm:px-8 xl:px-0">
  <a href="https://www.producthunt.com/posts/launchfast/" target="_blank" class="flex flex-row items-center justify-center">
    <img
      height="54"
      width="250"
      loading="lazy"
      alt="LaunchFast Logo"
      class="rounded-lg bg-gray-100"
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=417262&theme=light"
    />
  </a>
  <h1 class="xl:text-heading-1 my-6 max-w-3xl text-center text-3xl font-extrabold text-launchfast sm:text-5xl">
    <span class="text-white/50">Launch your apps</span> in hours <span class="text-white/50">with this</span> SvelteKit boilerplate
  </h1>
  <p class="mx-auto text-center font-medium text-white/50 md:text-lg">
    <span class="text-launchfast underline">Launch</span> your SaaS, AI projects, or web apps from concept to <span class="text-launchfast underline">web</span> heck faster with this
    SvelteKit boilerplate 🚀
  </p>
  <div class="mt-12 flex flex-col flex-wrap items-center justify-center gap-y-5 sm:flex-row sm:items-start sm:gap-x-3 sm:gap-y-0">
    <div class="flex flex-col items-center">
      <ButtonCheckout className="w-[270px] bg-launchfast hover:scale-105 transition duration-200" />
      <p class="mt-2 py-0 text-sm text-white">
        🎁
        <span class="text-accent font-semibold"> 75$ off</span>
        <span class="text-white/50"> for the first</span>
        <span class="text-accent font-semibold"> 30</span>
        <span class="text-white/50"> customers</span>
        <span class="invisible sm:visible"> ✨</span>
      </p>
    </div>
    <a
      href="#demo"
      class="h-fit w-[270px] rounded-full border border-launchfast px-10 py-3 text-center text-launchfast transition duration-200 hover:bg-launchfast hover:text-white sm:max-w-max"
    >
      View Demo
    </a>
  </div>
</div>
<Divider className="mt-12 border-gray-100/10" />
<div class="mt-12 flex flex-col items-center">
  <a
    id="demo"
    target="_blank"
    rel="noreferrer"
    href="https://twitter.com/rishi_raj_jain_/status/1708534109474378080"
    class="flex w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-white/20 bg-blue-100 px-7 py-2 shadow-2xl transition-all hover:bg-blue-200"
  >
    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 248 204" class="h-5 w-5 text-[#1d9bf0]">
      <path
        fill="currentColor"
        d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
      ></path>
    </svg>
    <p class="text-sm font-semibold text-[#1d9bf0]">Introducing LaunchFast</p>
  </a>
  <iframe
    width="300"
    loading="lazy"
    height="168.75"
    allowfullscreen
    title="LaunchFast Demo — 0.5x if too fast 😉"
    src="https://www.youtube.com/embed/NgyDG8qxz18"
    class="mt-8 aspect-video h-screen max-h-[50vw] w-full rounded-lg shadow-2xl sm:max-h-[39vw] sm:max-w-[70%]"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</div>
<Divider className="mt-12 border-gray-100/10" />
<Features />
<Divider className="mt-12 border-gray-100/10" />
<Pricing />
<Divider className="mt-12 border-gray-100/10" />
<Testimonials />
<Divider className="mt-12 border-gray-100/10" />
<Faq />
