<template>
  <div class="row posti-nav-container">
    <nav role="navigation">
      <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>News</li></a>
        <a href="#"><li>Contact</li></a>
      </ul>
    </div>
    </nav>
    <div class="col-3">

      <img src="/logo.png" alt="logo" height="32">
    </div>
    <div class="col-5">
      <p class="slogan">Aliquam at congue nulla, nunc scelerisque feugiat nibh vel suscipit</p>
    </div>
    <div class="col-2 social ml-auto">
      <div class="social" v-if="section">
        <a :href="section.meta.social.facebook" target="_blank"><span class="icon icon-facebook"></span></a>
        <a :href="section.meta.social.twitter" target="_blank"><span class="icon icon-twitter"></span></a>
      </div>
      <a href="mailto:example@mail.com" target="_blank"><span class="icon icon-email"></span></a>
      <div class="comments">
        <span class="icon icon-comment"></span>
        <span class="comment-count">88</span>
      </div>
    </div>
    <div class="login">
      LOGI SiSSE
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getSection')
  },
  computed: {
    section () {
      return this.$store.getters.section
    }
  }
}
</script>
