<script>
  import { getFirestore, doc, updateDoc, deleteDoc } from 'firebase/firestore';
  import { db } from './main';

  export let item = {};
  export let uid = '';

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
  <a
    href={'#'}
    on:click={() => deleteDoc(doc(db, `users/${uid}/products`, item.id))}
    >&#10006;</a
  >
</div>

<style>
  a {
    margin-left: 12px;
    color: red;
  }
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
