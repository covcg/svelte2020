<script>
  export let name;
  export let lastname;
  export let age;
</script>

<div class="Person">
  <p>{name} {lastname}, {age} año{age > 1 ? 's' : 'o'}</p>
</div>