<script lang="ts">
  /*
    A component that can be used anywhere in your app to open a Lemon Squeezy checkout
  
    <ButtonLSCheckout
      product_url="https://launchfast.lemonsqueezy.com/checkout/buy/30dd570f-3598-440d-a29a-1e002bda0eb6?checkout[discount_code]=M0OTIWMA"
    />
  */

  import { onMount } from 'svelte'
  import { slug } from 'github-slugger'

  export let minimal: boolean = false
  export let brand_name: string = 'LaunchFast'
  export let className: string = 'bg-launchfast'
  export let product_url: string = 'https://launchfast.lemonsqueezy.com/checkout/buy/30dd570f-3598-440d-a29a-1e002bda0eb6?checkout[discount_code]=M0OTIWMA'

  $: BUTTON_ID = slug(product_url)

  onMount(() => {
    const buttonElement = document.querySelectorAll('#' + BUTTON_ID)
    const setupLS = () => {
      window.createLemonSqueezy()
      if (buttonElement) {
        buttonElement.forEach((i) => i.classList.remove('pointer-events-none'))
        buttonElement.forEach((i) => {
          i.addEventListener('click', () => {
            window.LemonSqueezy.Url.Open(i.getAttribute('id'))
          })
        })
      }
      window['hasLemonSqueezy'] = true
      window.LemonSqueezy.Setup({
        eventHandler: (event: any) => {
          console.log(event)
        },
      })
    }
    if (buttonElement) buttonElement.forEach((i) => i.classList.add('pointer-events-none'))
    if (window['hasLemonSqueezy']) {
      setupLS()
    } else {
      var script = document.createElement('script')
      script.onload = () => {
        setTimeout(() => {
          setupLS()
        }, 100)
      }
      script.src = 'https://assets.lemonsqueezy.com/lemon.js'
      document.head.appendChild(script)
    }
  })
</script>

<button id={BUTTON_ID} class={['flex flex-row items-center justify-center gap-x-2 rounded-full text-white', minimal ? 'py-1 pl-2 pr-4' : 'px-10 py-3', className].join(' ')}>
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
