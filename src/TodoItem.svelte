<script>
  import { getFirestore, doc, updateDoc } from 'firebase/firestore';

  export let item = {};
  export let uid = '';

  const db = getFirestore();

  const putToBasket = () => {
    const productRef = doc(db, `users/${uid}/products`, item.id);
    updateDoc(productRef, {
      isBought: !item.isBought,
    });
  };
</script>

<div>
  <input type="checkbox" on:click={putToBasket} checked={item.isBought} />
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
