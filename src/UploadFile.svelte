<script>
  import { storage } from './main';
  import { ref, uploadBytes } from 'firebase/storage';

  export let uid = '';

  let files;
  let message = '';

  const uploadBill = (file) => {
    const billRef = ref(storage, `users/${uid}/bills/${Date.now()}`);
    uploadBytes(billRef, file).then((snapshot) => {
      message = 'Uploaded file path ' + billRef.fullPath;
    });
  };
</script>

<input type="file" bind:files on:change={uploadBill} />

{#if files && files[0]}
  <p>
    {message}
  </p>
{/if}
