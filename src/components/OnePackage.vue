<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <h2 class="font-weight-light">{{ pkg.name }}</h2>
        </v-list-item-title>
        <v-list-item-subtitle v-if="pkg.keywords">
          Keywords:
          <v-chip
            v-for="(keyword, i) in pkg.keywords" :key="pkg.name + keyword + i"
            class="mr-1" color="accent" text-color="black" x-small
            @click="keywordSearch(keyword)"
          >
            {{ keyword }}
          </v-chip>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon>
        <v-btn
          color="primary"
          fab small dark
          @click="showPackage(pkg.name, pkg.version)"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { search } from '../utils'

export default {
  name: 'OnePackage',
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  mixins: [search],
  methods: {
    keywordSearch (keyword) {
      this.query = keyword
      this.page = 1
      this.search()
    },
    showPackage (name, version) {
      this.$store.commit('showHideModal', { isVisible: true })
      this.$store.commit('setPackageInfo', { name, version })
    }
  }
}
</script>

<style lang="scss">

</style>
