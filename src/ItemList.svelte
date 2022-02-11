<script>
  import Item from './Item.svelte';

  export let title = '';

  export let items = [];

  export let filterFunction = undefined;
</script>

<div>
  <h4>{title}</h4>
  <ul>
    {#each items.filter(filterFunction) as item (item.id)}
      <Item bind:item />
    {/each}
  </ul>
</div>
