<template>
  <div>
    <h2 class="font-weight-light my-2">Files:</h2>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr
            v-for="file in info.files.files"
            :key="file.name"
          >
            <td class="icons-column">
              <v-icon>{{ file.type | icon }}</v-icon>
            </td>
            <td>{{ file.name }}</td>
            <td>{{ file.size }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'TheModalFiles',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  filters: {
    icon (value) {
      return value === 'directory' ? 'mdi-folder-outline' : 'mdi-file-outline'
    }
  }
}
</script>

<style lang="scss">
  .icons-column { width: 32px; }
</style>
