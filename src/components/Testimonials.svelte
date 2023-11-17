<script lang="ts">
  /*
    A component that can be used anywhere in your app

    <Testimonials />
  */

  import testimonialData from '@/lib/data/testimonials'
  import Testimonial from '@/components/Testimonial.svelte'
</script>

<section id="testimonials">
  <div class="mx-auto mt-12 flex max-w-7xl flex-col gap-12 px-8">
    <div class="flex flex-col text-left">
      <p class="text-base-content text-3xl font-extrabold text-launchfast sm:text-4xl">Our growing wall of love 💜</p>
      <span class="mt-3 text-white/50">These are some of the heartfelt testimonials about LaunchFa.st ✨</span>
      <div class="relative mt-8 columns-1 gap-4 sm:columns-2 md:columns-3">
        {#each testimonialData as i}
          <Testimonial {...i} />
        {/each}
      </div>
    </div>
  </div>
</section>
