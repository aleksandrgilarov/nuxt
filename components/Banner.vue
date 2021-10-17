<template>
  <div class="row">
    <div class="overlay">
      <h1 class="promo">Aliquam at congue nulla, nunc scelerisque feugiat nibh vel suscipit</h1>
      <a href="#" @click="scrollTo()" class="nooleke"></a>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    scrollTo() {
      document.getElementById("articles").scrollIntoView();
    }
  }

}
</script>


