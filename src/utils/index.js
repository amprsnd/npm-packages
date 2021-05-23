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

function formatStats (data) {
  let popularFiles = []
  const downloads = []

  for (const file in data.files) {
    popularFiles.push({
      x: file,
      y: data.files[file].total,
      downloads: data.files[file].dates
    })
  }

  popularFiles.sort((a, b) => a.y < b.y)

  if (popularFiles.length > 0) {
    const downloadsObj = popularFiles[0].downloads

    for (const date in downloadsObj) {
      downloads.push({
        x: date,
        y: downloadsObj[date]
      })
    }
  }

  popularFiles = [...popularFiles.slice(0, 10).reverse()]
  return {
    popular: {
      series: [{
        name: 'Downloads',
        data: popularFiles
      }]
    },
    downloads: {
      series: [{
        name: 'Downloads',
        data: downloads
      }]
    }
  }
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

const getPackageInfo = {
  methods: {
    request,
    getPackageInfo (name, version) {
      this.$store.commit('setPackageInfo', {
        registry: null,
        files: null,
        versions: null,
        stats: null
      })

      Promise.all([
        this.request(`${config.api.registrySearch}?text=${name}&size=1&from=0`),
        this.request(`${config.api.jsdelivrPackage}/${name}@${version}`),
        this.request(`${config.api.jsdelivrPackage}/${name}`),
        this.request(`${config.api.jsdelivrPackage}/${name}@${version}/stats/week`)
      ])
        .then(data => {
          this.$store.commit('setPackageInfo', {
            registry: data[0].objects[0].package,
            files: data[1],
            versions: data[2],
            stats: formatStats(data[3])
          })
        })
        .catch(err => console.log(err))
    }
  }
}

export { search, getPackageInfo }
