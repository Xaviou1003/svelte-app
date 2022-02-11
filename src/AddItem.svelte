<script>
  import { getFirestore } from 'firebase/firestore';
  import { collection, addDoc } from 'firebase/firestore';

  export let uid = '';

  const db = getFirestore();
  let label = '';
  let quantity = 1;

  const addItem = () => {
    if (label != '') {
      addDoc(collection(db, `users/${uid}/products`), {
        label,
        quantity,
        isBought: false,
      });
      label = '';
      quantity = 1;
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
