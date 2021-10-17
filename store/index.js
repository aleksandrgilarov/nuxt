import axios from 'axios'

export const state = () => ({
  articles: [],
  section: null
})

export const getters = {
  articles: state => state.articles,
  section: state => state.section
}

export const actions = {
  async getArticles({commit}) {
    const articles = await axios.get("https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5")
    commit("setArticles", articles.data)
  },
  async getSection({commit}) {
    const section = await axios.get("https://services.postimees.ee/rest/v1/sections/81")
    commit("setSectionData", section.data)
  }
}

export const mutations = {
  setArticles(state, data) {
    let articles = []
    data.forEach(article => {
      let title, excerpt, image = null
      if (article.headline) {
        title = article.headline
      }
      if (article.articleLead[0].html) {
        excerpt = article.articleLead[0].html
      }
      if(article.media && article.media.length !== 0) {
        article.media.forEach(media => {
          if (!image && media.type === "image") {
            image = media
          }
        })
      }
      articles.push({
        title: title,
        excerpt: excerpt,
        image: image,
        url: 'https://www.postimees.ee/'+article.id+'/'+article.slug
      })
    })
    state.articles = articles
  },
  setSectionData(state, section) {
    state.section = section
  }
}
