<template>
  <div>
    <h3 class="font-weight-light my-2">Description:</h3>
    <p>{{ info.registry.description }}</p>
    <v-divider />
    <div v-if="info.registry.keywords" class="my-2">
      <h3 class="font-weight-light d-inline my-2">Keywords:</h3>
      <v-chip
        v-for="(keyword, i) in info.registry.keywords" :key="keyword + i"
        class="ml-1" color="accent" text-color="black" x-small
      >
        {{ keyword }}
      </v-chip>
    </div>
    <v-divider />
    <h3 class="font-weight-light my-2">Links:</h3>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr
            v-for="(link, key) in info.registry.links"
            :key="key"
          >
            <td>{{ key }}</td>
            <td><a :href="link" target="_blank">{{ link }}</a></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <h2 v-if="info.registry.author" class="font-weight-light my-2">
      Author: {{ info.registry.author.name }}
    </h2>
    <h2 v-else class="font-weight-light my-2">
      Publisher: {{ info.registry.publisher.username }}
    </h2>
    <h3 class="font-weight-light my-2">
      Maintainers:
      <a v-for="maintainer in info.registry.maintainers"
        :key="maintainer.username"
        :href="'mailto:' + maintainer.email"
        target="_blank" class="mr-2"
      >
        {{ maintainer.username }}
      </a>
    </h3>
    <v-divider />
    <h2 class="font-weight-light my-2">
      Current version: {{ info.registry.version }}
    </h2>
    <p class="font-weight-light my-2 caption">
      Older versions:
      <span v-for="v in info.versions.versions" :key="v" class="mr-1">
        {{ v }}
      </span>
    </p>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'TheModalInfo',
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
