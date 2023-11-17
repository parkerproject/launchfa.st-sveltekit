<script lang="ts">
  /*
    A component that can be used anywhere in your app
    to let user sign in from Google

    <SignInWithGoogle />
  */

  import IconGoogle from './Icon-Google.svelte'
</script>

<a href="/api/auth/google">
  <button type="button" class="flex h-10 items-center gap-x-2 rounded-md border px-12 transition duration-300 hover:border-black">
    <IconGoogle />
    <p>Continue with Google</p>
  </button>
</a>
