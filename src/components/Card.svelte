<script>
import Comments from './Comments.svelte';
</script>

<div class="Card">
  <div class="Card-container">
    <div class="Card-header">
      <div class="Card-user">
        <img src="https://arepa.s3.amazonaws.com/elmo002.jpg" alt="elmo" />
        <h2>
          Elmo.pug
          <span>Bogotá, Colombia</span>
        </h2>
      </div>
      <div class="Card-settings">
        <i class="fas fa-ellipsis-h" />
      </div>
    </div>
    <div class="Card-photo">
      <figure>
        <img src="https://arepa.s3.amazonaws.com/elmo002.jpg" alt="elmo" />
      </figure>
    </div>
    <div class="Card-actions">
      <div class="Card-actions-left">
        <i class="fas fa-heart"></i>
        <i class="fas fa-paper-plane"></i>
      </div>
      <div class="Card-actions-right">
        <i class="fas fa-bookmark"></i>
      </div>
    </div>
    <div class="Card-description">
      <h3>elmo.pug</h3>
      <span>Hola!</span>
    </div>
    <Comments />
  </div>
</div>