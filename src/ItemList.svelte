<script>
  import { onDestroy } from 'svelte';
  import {
    addDoc,
    collection,
    query,
    where,
    onSnapshot,
    getDocs,
    getFirestore,
  } from 'firebase/firestore';
  import TodoItem from './TodoItem.svelte';

  export let title = '';
  export let uid = '';
  export let isBought = false;

  const db = getFirestore();
  let items = [];

  const q = query(
    collection(db, `users/${uid}/products`),
    where('isBought', '==', isBought)
  );

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        items = [
          ...items,
          {
            ...change.doc.data(),
            id: change.doc.id,
          },
        ];
      }
      if (change.type === 'removed') {
        items = items.filter((i) => i.id !== change.doc.id);
      }
      if (change.type === 'modified') {
        items = [
          ...items.filter((i) => i.id !== change.doc.id),
          {
            ...change.doc.data(),
            id: change.doc.id,
          },
        ];
      }
    });
  });

  onDestroy(unsubscribe);
</script>

<div>
  <h4>{title}</h4>
  <ul>
    {#each items as item (item.id)}
      <TodoItem bind:item {uid} />
    {/each}
  </ul>
</div>
