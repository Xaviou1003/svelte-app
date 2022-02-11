<script>
  export let uid = '';
  let files;
  let message = '';
  const upload = (file) => {
    console.log('TODO: Implent upload file in storage');
  };
</script>

<input type="file" bind:files on:change={upload} />

{#if files && files[0]}
  <p>
    {message}
  </p>
{/if}
