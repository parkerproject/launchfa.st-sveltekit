<script lang="ts">
  import { PUBLIC_FONT_NAME } from '$env/static/public'

  /*
    A component that can be used anywhere in your app
    Add this in the head of the page if you want to use it globally

    <GoogleFonts
      name="Inter"
      display="Optional"
      weights={[200, 300]}
    />

    Also, don't forget to change the name in the file: tailwind.config.cjs
  */

  export let display = 'swap'
  export let name = PUBLIC_FONT_NAME || 'Archivo'
  export let weights = [100, 200, 300, 400, 500, 600, 700, 800]

  const fontURL = new URL('/css2', 'https://fonts.googleapis.com')
  fontURL.searchParams.set('display', display)
  fontURL.searchParams.set('family', `${name}:wght@${weights.join(';')}`)
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href={fontURL.toString()} rel="stylesheet" />
