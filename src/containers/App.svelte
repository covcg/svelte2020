<script>
  import Header from '../components/Header.svelte';
  import Main from '../components/Main.svelte';
  import Sidebar from '../components/Sidebar.svelte';
  import Timeline from '../components/Timeline.svelte';
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
  <Timeline />
  <Sidebar />
</Main>