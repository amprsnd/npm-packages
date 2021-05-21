<template>
  <div class="d-flex align-center primary">
    <div class="logo mx-2">
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 100">
        <path d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0zm14.332 14.332h56.834v56.834H56.834V28.664H42.502v42.502h-28.17V14.332zm71.166 0h56.834v56.834h-28.17v14.332H85.498V14.332zm71.166 0h85.498v56.834H227.83V28.664h-14.332v42.502h-14.332V28.664h-14.332v42.502h-28.17V14.332zm-42.502 14.332v28.17H128v-28.17h-13.838z" fill="#fff"/>
      </svg>
    </div>

    <v-text-field
      v-model="query"
      label="packages" dark
      @keypress.enter="newSearch()"
    />

    <v-btn
      color="secondary"
      class="ma-2 white--text"
      :disabled="!query"
      @click="newSearch()"
    >
      Search <v-icon right dark>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { search } from '../utils'

export default {
  name: 'TheHeader',
  mixins: [search],
  methods: {
    newSearch () {
      this.page = 1
      this.search()
    }
  },
  beforeMount () {
    if (this.$route.query.search) {
      this.query = this.$route.query.search
      this.search()
    }
  }
}
</script>

<style lang="scss">
  .logo {
    height: 32px;

    svg {
      display: block;
      margin: 0;
      width: auto;
      height: 100%;
    }
  }
</style>
