<script>
  export let count;
  export let text;
</script>

<button on:click class="Button">
  {text}
  {count || ''}
</button>