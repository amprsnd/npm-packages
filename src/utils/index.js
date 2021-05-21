import config from '../config'

function request (url) {
  this.$store.commit('setIsLoading', { isLoading: true })
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      this.$store.commit('setIsLoading', { isLoading: false })
      return data
    })
    .catch(err => {
      this.$store.commit('setIsLoading', { isLoading: false })
      return new Error(err)
    })
}

const search = {
  computed: {
    query: {
      get () { return this.$store.state.searchQuery },
      set (value) { this.$store.commit('setSearchQuery', { searchQuery: value }) }
    },
    page: {
      get () { return this.$store.state.currentPage },
      set (value) { this.$store.commit('setCurrentPage', { currentPage: value }) }
    }
  },
  methods: {
    request,
    search () {
      if (!this.query) return

      if (this.$route.query.search !== this.$store.getters.encodedSearchQuery) {
        this.$router.push({ query: { search: this.$store.getters.encodedSearchQuery } })
      }

      const uri = `${config.api.registrySearch}?text=${this.query}&size=${config.pageSize}&from=${this.$store.getters.offset}`
      this.request(uri)
        .then(res => {
          this.$store.commit('setPackagesList', { packagesList: res.objects })
          this.$store.commit('setTotalResults', { totalResults: res.total })
        })
        .catch(err => console.log(err))
    }
  }
}

const show = {
  request,
  methods: {
    show () {
      //
    }
  }
}

export { search, show }
