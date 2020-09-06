<script>
import { count } from "../store/store";



function handleClick() {
  count.update(n => n + 1);
}
</script>

<style>
  button {
    background-color: #f76027;
    color: white;
    border: none;
    border-radius: .25em;
    padding: .5em;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>

<button on:click={handleClick} class="Button">
  Click {$count || ''}
</button>