<script>
  let label = '';
  let quantity = 1;
  export let items = [];

  const addItem = () => {
    if (label != '') {
      items.push({ label, quantity, isBought: false, id: items.length });
      label = '';
      quantity = 1;
      items = items;
    }
  };
</script>

<input type="number" bind:value={quantity} />
<input type="text" bind:value={label} placeholder="Enter your article" />
<button on:click={addItem}>Add</button>

<style>
  input[type='number'] {
    width: 72px;
  }
</style>
