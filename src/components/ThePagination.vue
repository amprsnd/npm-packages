<template>
  <v-pagination
    v-model="page"
    :length="$store.getters.totalPages"
    :total-visible="11"
    prev-icon="mdi-menu-left"
    next-icon="mdi-menu-right"
    @input="navigate"
  />
</template>

<script>
import { search } from '../utils'

export default {
  name: 'ThePagination',
  mixins: [search],
  methods: {
    navigate (page) {
      this.search(this.query, page)
    }
  }
}
</script>

<style lang="scss">

</style>
