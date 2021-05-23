<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert
          v-if="loadingStatus === 'nothing'"
          type="warning"
          class="my-3"
        >
          No packages found for your request.
        </v-alert>

        <v-alert
          v-if="loadingStatus === 'error'"
          type="error"
          class="my-3"
        >
          Error loading data. Please, try again
        </v-alert>

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

import OnePackage from './OnePackage'

export default {
  name: 'PackagesList',
  components: {
    OnePackage
  },
  computed: mapState(['packagesList', 'totalResults', 'loadingStatus'])
}
</script>

<style lang="scss">

</style>
