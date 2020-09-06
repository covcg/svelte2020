<script>
  export let name;
  export let lastname;
  export let age;
</script>

<div class="Person">
  <p>{name} {lastname}, {age} year{age > 1 ? 's' : 'o'} old</p>
</div>