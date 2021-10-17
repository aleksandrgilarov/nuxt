<template>
  <div id="articles" class="articles">
    <div class="row article" v-for="article in articles" :key="article.id">
      <div class="cover"
           v-bind:style="{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0.18, 1) 100%), url(' + article.image.sources.landscape.large + ') center' }">
          <a :href="article.url" target="_blank"><p class="title">{{article.title}}</p></a>
      </div>
     <div class="excerpt-container row">
       <div class="excerpt col-8" v-html="article.excerpt"></div>
       <div class="nr-wrap col-4"><span class="nr"></span></div>
     </div>
    </div>
  </div>

</template>

<script>

export default {
  mounted() {
    this.$store.dispatch('getArticles')
  },
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  },
}
</script>
