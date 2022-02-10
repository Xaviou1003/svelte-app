<script>
  import AddItem from './AddItem.svelte';

  import TodoItem from './TodoItem.svelte';

  let items = [{ label: 'tests', quantity: 1, isBought: false, id: 0 }];
</script>

<main>
  <h1>Shopping list</h1>
  <AddItem bind:items />
  <div class="container">
    <div>
      <h4>To buy</h4>
      <ul>
        {#each items.filter((it) => !it.isBought) as item (item.id)}
          <TodoItem bind:item />
        {/each}
      </ul>
    </div>
    <hr />
    <div>
      <h4>Bought</h4>
      <ul>
        {#each items.filter((it) => it.isBought) as item (item.id)}
          <TodoItem bind:item />
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  div.container {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
