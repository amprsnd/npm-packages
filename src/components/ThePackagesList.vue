<template>
  <v-container>
    <the-modal />
    <v-row>
      <v-col>
        <v-list two-line v-if="packagesList.length > 0">
          <h1 class="font-weight-light">
            Search results for "{{ decodeURI($route.query.search) }}"
          </h1>
          <h3 class="font-weight-light">Total results: {{ totalResults }}</h3>
          <one-package
            v-for="pkg in packagesList"
            :key="`${pkg.package.name}@${pkg.package.version}`"
            :pkg="pkg.package"
          />
        </v-list>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import TheModal from './TheModal.vue'
import OnePackage from './OnePackage'

export default {
  name: 'PackagesList',
  components: {
    TheModal,
    OnePackage
  },
  computed: mapState(['packagesList', 'totalResults'])
}
</script>

<style lang="scss">

</style>
