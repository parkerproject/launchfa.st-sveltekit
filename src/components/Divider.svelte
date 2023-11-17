<script lang="ts">
  /*
    A component that can be used anywhere in your app

    <Divider />
  */

  export let className: string
</script>

<div class={['h-[1px] w-full border', className].join(' ')}></div>
