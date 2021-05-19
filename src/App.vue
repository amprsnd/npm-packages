<template>
  <v-app id="app">
    <the-header v-once />
    <v-main>
      <packages-list />
    </v-main>
    <the-footer v-once />
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader'
import PackagesList from './components/PackagesList'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    PackagesList,
    TheFooter
  }
}
</script>

<style lang="scss">
  #app { min-height: 320px; }
</style>
