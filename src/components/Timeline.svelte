<script>
import App from '../containers/App.svelte';
import Card from './Card.svelte';
import Comments from './Comments.svelte';
export let posts = [];
</script>

<style>
  .Timeline {
    padding: 4em 0 0 0;
  }
</style>

<div class="Timeline">
  <div class="Timeline-container">
		{#each posts as post}
			<Card {...post} />
		{:else}
			<p>Loading...</p>
		{/each}
  </div>
</div>