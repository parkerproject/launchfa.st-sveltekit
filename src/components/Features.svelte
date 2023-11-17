<script lang="ts">
  /*
    A component that can be used anywhere in your app
    
    <Features />
  */

  import { slug } from 'github-slugger'
  import Divider from './Divider.svelte'
  import features from '@/lib/data/features'
</script>

<div class="mx-auto flex max-w-7xl flex-col gap-8 px-8 py-24">
  <div class="flex flex-col text-left">
    <p class="text-3xl font-extrabold text-launchfast sm:text-4xl">Your Time-Saving Web Development Boilerplate</p>
    <p class="mt-3 font-medium text-white/50 md:text-lg">
      Save time using countless integrations, API Routes, and components to send emails, login users, protect routes, track user events, accept payments worldwide, let user upload
      files, capture waitlists, start supporting customers and more!
    </p>
  </div>
  {#each features as feature, index}
    {#if index !== 0}
      <Divider className="py-0 my-0 border-gray-100/10" />
    {/if}
    <a href={`#${slug(feature.heading)}`} id={slug(feature.heading)} class="mt-4 flex flex-col text-left">
      <span class="max-w-max rounded border-b border-l border-launchfast px-2 text-xl font-medium text-white/50 shadow-sm shadow-launchfast duration-200 hover:scale-[101%]">
        {feature.heading}
      </span>
      <span class="mt-3 font-medium text-white/50 md:text-lg">{feature.tagline}</span>
    </a>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each feature.products as benefit}
        <div class="flex flex-col rounded bg-white p-5">
          <img alt={benefit.name} class="h-[30px] w-[30px] bg-white" loading="lazy" width="30" height="30" src={benefit.logo} />
          <span class="mt-3 font-bold text-launchfast">{benefit.name}</span>
          {#if benefit.description}
            <span class="mt-3">{benefit.description}</span>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>
