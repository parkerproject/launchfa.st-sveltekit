<script lang="ts">
  /*
    A component that can be used anywhere in your app to open a Stripe checkout
    
    <ButtonCheckout />
  */

  export let minimal: boolean = false
  export let brand_name: string = 'LaunchFast'
  export let className: string = 'bg-launchfast'
</script>

<form method="post" action="/api/stripe/checkout">
  <button class={['flex cursor-pointer flex-row items-center justify-center gap-x-2 rounded-full text-white', minimal ? 'py-1 pl-2 pr-4' : 'px-10 py-3', className].join(' ')}>
    <img
      loading="lazy"
      alt="LaunchFast Logo"
      src="/purple-icon.png"
      width={minimal ? '24' : '30'}
      height={minimal ? '24' : '30'}
      class={minimal ? 'h-[24px] w-[24px]' : 'h-[30px] w-[30px]'}
    />
    <span> Get {brand_name}</span>
  </button>
</form>
