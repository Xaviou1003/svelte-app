<script>
  import { getAuth } from 'firebase/auth';
  import {
    getValue,
    getRemoteConfig,
    fetchAndActivate,
  } from 'firebase/remote-config';

  import AddItem from './AddItem.svelte';
  import Login from './Login.svelte';
  import ItemList from './ItemList.svelte';
  import UploadFile from './UploadFile.svelte';
  import { onMount } from 'svelte';

  const remoteConfig = getRemoteConfig();
  remoteConfig.settings.minimumFetchIntervalMillis = 1000;

  let connectedUser;
  let title = 'List';

  const auth = getAuth();

  auth.onAuthStateChanged((u) => (connectedUser = u));

  const logout = () => auth.signOut();

  onMount(async () => {
    await fetchAndActivate(remoteConfig);
    title = getValue(remoteConfig, 'app_title').asString();
  });
</script>

<main>
  {#if connectedUser}
    <button on:click={logout}>Logout</button>
    <h1>{title}</h1>
    <AddItem uid={connectedUser.uid} />
    <div class="container">
      <ItemList uid={connectedUser.uid} isBought={false} title="To buy" />
      <hr />
      <ItemList uid={connectedUser.uid} isBought={true} title="Bought" />
    </div>
    <UploadFile uid={connectedUser.uid} />
  {:else}
    <Login />
  {/if}
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
