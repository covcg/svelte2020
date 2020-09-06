<script>
import { onMount } from "svelte";

let photos = [];

onMount(async () => {
  console.log('onMount')
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
  photos = await response.json();
  console.log('photos', photos);
});
</script>

<style>
  .Photos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .photo {
    max-width: 10em;
    align-self: start;
  }
</style>

<div class="Photos">
  {#each photos as photo}
    <figure class="photo">
      <img src={photo.thumbnailUrl} alt={photo.title}>
      <figcaption>{photo.title}</figcaption>
    </figure>
  {:else}
    <p>...loading</p>
  {/each}
</div>