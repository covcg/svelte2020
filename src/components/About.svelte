<script>
  let someText = `Frontend Developer at Laleo`;
  let count = 0;
  let styles = { darkMOde: false }

  function handleClick() {
    count++;
  }

  function toggleDarkMode() {
    styles.darkMOde = !styles.darkMOde;
    window.document.body.classList.toggle('dark-mode');
  }
</script>

<style>
  p {
    color: var(--theme-color);
    font-size: 22px;
  }
</style>

<div class="About">
  {#if !styles.darkMOde}
    <p>{someText}</p>
  {:else}
    <p>Hello dark mode!</p>
  {/if}
  <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
  <button on:click={toggleDarkMode}>Dark Mode {styles.darkMOde ? 'Active' : 'Inactive'}</button>
</div>