<template>
  <v-expand-transition>
    <v-progress-linear
      v-show="isLoading"
      indeterminate
      color="accent"
      height="12"
      class="preloader"
    />
  </v-expand-transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ThePreloader',
  computed: mapState(['isLoading'])
}
</script>

<style lang="scss">
  .preloader {
    position: fixed;
    bottom: 0;
    z-index: 1;
    background: #fff;
  }
</style>
