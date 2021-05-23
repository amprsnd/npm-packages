import Vue from 'vue'
import Vuex from 'vuex'

import config from '../config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: '',
    loadingStatus: null,
    packagesList: [],
    totalResults: 0,
    currentPage: 1,
    isLoading: false,
    modal: false,
    packageInfo: {
      name: null,
      version: null,
      registry: null,
      files: null,
      versions: null,
      stats: null,
      loadingStatus: null
    }
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
    setLoadingStatus (state, payload) { state.loadingStatus = payload.status },
    setPackagesList (state, payload) { state.packagesList = payload.packagesList },
    setTotalResults (state, payload) { state.totalResults = payload.totalResults },
    setCurrentPage (state, payload) { state.currentPage = payload.currentPage },
    setIsLoading (state, payload) { state.isLoading = payload.isLoading },
    showHideModal (state, payload) { state.modal = payload.isVisible },
    setPackageMainInfo (state, payload) {
      state.packageInfo.name = payload.name
      state.packageInfo.version = payload.version
    },
    setPackageInfo (state, payload) {
      state.packageInfo = { ...state.packageInfo, ...payload }
    },
    setPackageLoadingStatus (state, payload) {
      state.packageInfo.loadingStatus = payload.status
    }
  }
})
