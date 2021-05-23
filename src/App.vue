<template>
  <v-app id="app">
    <the-header />
    <v-main>
      <the-modal v-if="$store.state.modal" />
      <the-packages-list />
      <the-pagination v-if="$store.state.totalResults > pageSize" />
    </v-main>
    <the-preloader />
    <the-footer v-once />
  </v-app>
</template>

<script>
import config from './config'

import TheHeader from './components/TheHeader'
import TheModal from './components/TheModal'
import ThePackagesList from './components/ThePackagesList'
import ThePagination from './components/ThePagination'
import TheFooter from './components/TheFooter'
import ThePreloader from './components/ThePreloader'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheModal,
    ThePackagesList,
    ThePagination,
    TheFooter,
    ThePreloader
  },
  data: () => ({ pageSize: config.pageSize })
}
</script>

<style lang="scss">
  #app { min-height: 320px; }
</style>
