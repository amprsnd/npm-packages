<template>
  <v-dialog
    fullscreen
    hide-overlay
    v-model="dialog"
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>Package Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div class="pa-4 pt-2">
        Content
        <v-divider />
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TheModal',
  data: () => ({
    dialog: true
  })
}
</script>

<style lang="scss">

</style>
