import Vue from 'vue'
import Vuex from 'vuex'

import config from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: '',
    packagesList: [],
    totalResults: 0,
    packagePreview: null,
    currentPage: 1,
    isLoading: false
  },
  getters: {
    encodedSearchQuery: state => encodeURI(state.searchQuery),
    offset: state => state.currentPage * config.pageSize - config.pageSize,
    totalPages: state => {
      let pages = Math.floor(state.totalResults / config.pageSize)
      if (state.totalResults % config.pageSize) pages += 1
      return pages
    }
  },

  mutations: {
    setSearchQuery (state, payload) { state.searchQuery = decodeURI(payload.searchQuery) },
    setPackagesList (state, payload) { state.packagesList = payload.packagesList },
    setTotalResults (state, payload) { state.totalResults = payload.totalResults },
    setCurrentPage (state, payload) { state.currentPage = payload.currentPage },
    setIsLoading (state, payload) { state.isLoading = payload.isLoading }
  },
  actions: {
  }
})
