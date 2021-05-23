<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>

      <v-card-title class="primary">
        <span class="caption">Test task Frozeneon</span>
        <v-spacer></v-spacer>
        <v-btn
          v-for="link in links"
          :key="link[0]"
          :href="link[1]" target="_blank"
          class="mx-4" dark icon
        >
          <v-icon size="24px">{{ link[0] }}</v-icon>
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
    links: [
      ['mdi-github', 'https://github.com/amprsnd?tab=repositories'],
      ['mdi-send-circle-outline', 'https://t.me/amprsnd'],
      ['mdi-at', 'mailto:n.pyatayev@gmail.com']
    ]
  })
}
</script>

<style lang="scss">

</style>
