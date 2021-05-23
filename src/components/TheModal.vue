<template>
  <v-dialog
    v-model="isVisible"
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>
          {{ info.name }}@{{ info.version }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            icon dark
            @click="isVisible = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div class="pa-4 pt-2">
        <h1 class="font-weight-light">
          {{ info.name }}
          <img
            :src="`${config.api.jsdelivrPackage}/${info.name}/badge?style=rounded`"
            :alt="info.name"
          >
        </h1>
        <v-divider />

        <v-progress-linear
          v-if="info.loadingStatus === 'loading'"
          indeterminate
          color="accent"
          class="my-3"
        />

        <v-alert
          v-if="info.loadingStatus === 'error'"
          type="error"
          class="my-3"
        >
          Error loading data. Please, try again
        </v-alert>

        <the-modal-info :info="info" v-if="info.registry" />

        <the-modal-files :info="info" v-if="info.files" />

        <the-modal-stats :info="info" v-if="info.stats" />

      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import config from '../config'
import { getPackageInfo } from '../utils'

import { mapState } from 'vuex'
import TheModalInfo from './TheModalInfo'
import TheModalFiles from './TheModalFiles'
import TheModalStats from './TheModalStats'

export default {
  name: 'TheModal',
  mixins: [getPackageInfo],
  components: { TheModalInfo, TheModalFiles, TheModalStats },
  data: () => ({ config }),
  computed: {
    ...mapState({ info: state => state.packageInfo }),
    isVisible: {
      get () { return this.$store.state.modal },
      set (value) { this.$store.commit('showHideModal', { isVisible: value }) }
    }
  },
  beforeMount () {
    this.getPackageInfo(this.info.name, this.info.version)
  }
}
</script>

<style lang="scss">
  .v-dialog .v-card { height:100% }
</style>
