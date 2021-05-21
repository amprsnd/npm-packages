<template>
  <v-app id="app">
    <the-header />
    <v-main>
      <the-packages-list />
      <the-pagination v-if="$store.state.totalResults > pageSize" />
    </v-main>
    <the-footer v-once />
    <the-preloader />
  </v-app>
</template>

<script>
import config from './config'

import TheHeader from './components/TheHeader'
import ThePackagesList from './components/ThePackagesList'
import ThePagination from './components/ThePagination'
import TheFooter from './components/TheFooter'
import ThePreloader from './components/ThePreloader'

export default {
  name: 'App',
  components: {
    TheHeader,
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
