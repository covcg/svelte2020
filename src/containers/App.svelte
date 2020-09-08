<script>
  import Header from '../components/Header.svelte';
  import Main from '../components/Main.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import Timeline from '../components/Timeline.svelte';
	import { onMount } from 'svelte';
import Card from '../components/Card.svelte';
import Comments from '../components/Comments.svelte';
import Profile from '../components/Profile.svelte';

	let data = {};
	const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data"

	onMount(async () => {
		const response = await fetch(API);
		data = await response.json();
	});
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Pacifico&display=swap');

  :global(body) {
    font-family: "Lato", sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    color: rgba(38, 38, 38, .7);
  }
  :global(h1, h2, h3) {
    margin: 0;
    padding: 0;
  }
</style>

<Header />
<Main>
  <Timeline posts={data.posts} />
  <Sidebar {...data.user} />
</Main>