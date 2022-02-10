<script>
  export let item = {};

  const putInBasket = () => {
    item.isBought = !item.isBought;
  };
</script>

<div>
  <input type="checkbox" on:click={putInBasket} checked={item.isBought} />
  <li>
    {item.quantity} x {item.label}
  </li>
</div>

<style>
  div {
    display: flex;
    margin: auto;
    max-width: 300px;
  }

  input {
    zoom: 1.5;
  }

  li {
    display: flex;
    margin-left: 12px;
    color: blue;
    list-style-type: none;
  }
</style>
