<script>
  import { collection, addDoc } from 'firebase/firestore';
  import { logEvent } from 'firebase/analytics';

  import { analytics, db } from './main';

  export let uid = '';

  let label = '';
  let quantity = 1;

  const addItem = () => {
    if (label != '') {
      addDoc(collection(db, `users/${uid}/products`), {
        label,
        quantity,
        isBought: false,
      });
      logEvent(analytics, 'add_product', {
        debug_mode: true,
        label,
        quantity,
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
