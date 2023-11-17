<script lang="ts">
  /*
    A component that can be used anywhere in your app

    <Footer
      twitter="rishi_raj_jain_"
      brand_name="launchfa.st"
    />
  */

  export let brand_name: string
  export let twitter: string = 'rishi_raj_jain_'
</script>

<footer class="relative mx-auto mt-8 flex max-w-7xl flex-col p-8 xl:grid xl:grid-cols-5">
  <div class="flex flex-col space-y-8 xl:col-span-2">
    <a class="h-12 w-12" href="/">
      <img class="rounded-full bg-gray-100" loading="lazy" height="100" width="100" src="/purple-icon.png" alt={brand_name} />
    </a>
    <p class="max-w-xs text-sm text-gray-500">Launching SaaS just got faster today with LaunchFa.st 🚀</p>
    <div class="flex items-center space-x-2">
      <a
        target="_blank"
        href={`https://twitter.com/${twitter}`}
        class="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-white/10 dark:active:bg-white/25"
      >
        <span class="sr-only">Twitter</span>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="color:currentColor"
          shape-rendering="geometricPrecision"
          class="h-5 w-5 fill-blue-400 stroke-none"
        >
          <path
            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
          >
          </path>
        </svg>
      </a>
      <div class="h-8 border-l border-white/10"></div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/rishi-raj-jain"
        class="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-white/10 dark:active:bg-white/25"
      >
        <span class="sr-only">Github</span>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="color:currentColor"
          shape-rendering="geometricPrecision"
          class="h-5 w-5 fill-black stroke-none dark:stroke-gray-400"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
          >
          </path>
        </svg>
      </a>
      <div class="h-8 border-l border-white/10"></div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/rishi-raj-jain/"
        class="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-white/10 dark:active:bg-white/25"
      >
        <span class="sr-only">LinkedIn</span>
        <svg
          fill="none"
          width="24"
          height="24"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          style="color:currentColor"
          shape-rendering="geometricPrecision"
          class="h-5 w-5 fill-blue-600 stroke-none"
        >
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"> </path>
          <circle cx="4" cy="4" r="2"> </circle>
        </svg>
      </a>
    </div>
    <span class="text-xs font-light text-gray-400">
      © {new Date().getFullYear()}&nbsp;{brand_name}
    </span>
  </div>
  <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <h3 class="text-sm font-semibold text-white/75">Product</h3>
        <div class="mt-4 flex flex-col space-y-4">
          <a class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="/#pricing">Pricing</a>
          <a class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="mailto:jain71000@gmail.com">Support</a>
          <a target="_blank" class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="https://affiliates.reflio.com/invite/launchfast">
            Affiliates - Earn 30%
          </a>
        </div>
      </div>
      <div class="mt-10 md:mt-0">
        <h3 class="text-sm font-semibold text-white/75">Documentation</h3>
        <div class="mt-4 flex flex-col space-y-4">
          <a class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="/documentation">Docs</a>
        </div>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <h3 class="text-sm font-semibold text-white/75">Company</h3>
        <div class="mt-4 flex flex-col space-y-4">
          <a class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="/#faq">FAQ</a>
          <a class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="/careers">Careers</a>
        </div>
      </div>
      <div class="mt-10 md:mt-0">
        <h3 class="text-sm font-semibold text-white/75">Legal</h3>
        <div class="mt-4 flex flex-col space-y-4">
          <a class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="/privacy">Privacy</a>
          <a class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-launchfast" href="/terms">Terms</a>
        </div>
      </div>
    </div>
  </div>
</footer>
