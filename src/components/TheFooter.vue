<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>

      <v-card-title class="primary">
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Nikolay Pyatayev</strong>
      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    icons: [
      'mdi-github',
      'mdi-send-circle-outline',
      'mdi-at'
    ]
  })
}
</script>

<style lang="scss">

</style>
