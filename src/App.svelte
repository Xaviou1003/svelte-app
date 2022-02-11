<script>
  import AddItem from './AddItem.svelte';
  import ItemList from './ItemList.svelte';

  let items = [{ label: 'Bananes', quantity: 10, isBought: false, id: 0 }];
</script>

<main>
  <h1>Shopping list</h1>
  <AddItem bind:items />
  <div class="container">
    <ItemList
      title="To purchase"
      filterFunction={(it) => !it.isBought}
      bind:items
    />
    <hr />
    <ItemList title="Bought" filterFunction={(it) => it.isBought} bind:items />
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
