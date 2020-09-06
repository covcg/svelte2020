<script>
  let skills = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'CSS',
    },
    {
      id: 3,
      name: 'Javascript'
    }
  ]
</script>

<style>
  .Skills {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline;
    margin: 0 0 0 .5em;
  }
</style>

<div class="Skills">
  <h3>Abilities</h3>
  <ul>
    {#each skills as skill}
      <li>{skill.name}</li>
    {/each}
  </ul>
</div>