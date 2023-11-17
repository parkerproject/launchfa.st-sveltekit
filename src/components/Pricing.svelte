<script lang="ts">
  /*
    A component that can be used anywhere in your app to display pricing

    <Pricing />
  */

  import features from '@/lib/data/features'
  import ButtonCheckout from './Button-Checkout.svelte'

  const pricingFeatures = [...features.map((i) => i.heading), 'Integrations on-demand', 'Priority Support']
</script>

<section id="pricing" class="mx-auto flex max-w-7xl flex-col gap-8 px-8 py-24">
  <div class="flex flex-col text-left">
    <p class="text-3xl font-extrabold text-launchfast sm:text-4xl"><span class="text-white/75">Pay once</span>, use forever</p>
    <p class="mt-3 font-medium text-white/50 md:text-lg">LaunchFa.st SvelteKit Boilerplate is a one-time purchase. You get *all* the good things in a single purchase.</p>
    <p class="mt-8 text-4xl font-semibold tracking-tighter lg:text-5xl">
      <span class="text-launchfast/50 line-through">150$</span>
      <span class="ml-2 text-launchfast">75$</span>
      <span class="ml-2 text-xs font-normal tracking-normal text-launchfast">/ forever</span>
    </p>
    <ButtonCheckout className="shadow-md hover:scale-[102%] duration-200 transition shadow-black bg-launchfast mt-8" />
    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each pricingFeatures as i}
        <div class="flex flex-row items-center gap-x-3">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-white/75"
            xmlns="https://www.w3.org/2000/svg"
          >
            <polyline points="20 6 9 17 4 12"> </polyline>
          </svg>
          <span class="text-white/75">{i}</span>
        </div>
      {/each}
      <div class="flex flex-row items-center gap-x-3">
        <svg
          width="20"
          height="20"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-white/75"
          xmlns="https://www.w3.org/2000/svg"
        >
          <line x1="12" x2="12" y1="5" y2="19"></line>
          <line x1="5" x2="19" y1="12" y2="12"></line>
        </svg>
        <span class="text-white/75 underline">And many, many more</span>
      </div>
    </div>
  </div>
</section>
