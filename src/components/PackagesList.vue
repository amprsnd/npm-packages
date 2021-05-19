<template>
  <v-container>
    <v-row>
      <v-col>
        <the-modal />

        <v-list two-line>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <h2 class="font-weight-light">Vue</h2>
              </v-list-item-title>
              <v-list-item-subtitle>
                Tags:
                <v-chip class="mr-1" color="accent" text-color="black" x-small>Tag</v-chip>
                <v-chip class="mr-1" color="accent" text-color="black" x-small>Tag</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-btn color="primary" fab small dark>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <h2 class="font-weight-light">JQuery</h2>
              </v-list-item-title>
              <v-list-item-subtitle>
                Tags:
                <v-chip class="mr-1" color="accent" text-color="black" x-small>Tag</v-chip>
                <v-chip class="mr-1" color="accent" text-color="black" x-small>Tag</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-btn color="primary" fab small dark>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
          <v-divider></v-divider>

        </v-list>

        <v-pagination
          v-model="page"
          :length="4"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheModal from './TheModal.vue'

export default {
  name: 'PackagesList',
  components: {
    TheModal
  },
  data: () => ({
    page: 1
  })
}
</script>

<style lang="scss">

</style>
