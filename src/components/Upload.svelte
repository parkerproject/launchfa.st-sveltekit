<script lang="ts">
  /*
    A component that can be used anywhere in your app

    <Upload />
  */

  import { onMount } from 'svelte'

  let fileInput
  let file: any = null

  async function uploadFile() {
    const formData = new FormData()
    if (file) formData.append('file', file)

    const reader = new FileReader()
    reader.onload = async (event) => {
      fetch('/api/storage', {
        method: 'POST',
        body: formData,
      }).then((res) => res.json())
    }
    reader.readAsArrayBuffer(file)
  }

  function handleFileChange(event: any) {
    file = event.target.files[0]
    uploadFile()
  }

  onMount(() => {
    file = null
  })
</script>

<button
  on:click={() => {
    document.getElementById('fileInput')?.click()
  }}
  class="flex appearance-none flex-row items-center gap-x-3 fill-[#858699] p-1 text-[#858699] hover:bg-gray-100/5 hover:fill-white hover:text-white"
>
  <svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
  </svg>
  <span> Upload </span>
</button>

<input class="hidden" type="file" id="fileInput" on:change={handleFileChange} bind:this={fileInput} />
