<script>
import Button from "./Button.svelte";

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
  <Button
    text="Click"
    {count}
    on:click={handleClick}
  />
  <Button
    text={`Dark Mode ${styles.darkMOde ? 'Active' : 'Inactive'}`}
    on:click={toggleDarkMode}
  />
</div>