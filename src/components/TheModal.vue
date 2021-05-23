<template>
  <v-dialog
    v-model="isVisible"
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>
          {{ info.name }}@{{ info.version }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            icon dark
            @click="isVisible = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div class="pa-4 pt-2">
        <h1 class="font-weight-light">
          {{ info.name }}
          <img
            :src="`${config.api.jsdelivrPackage}/${info.name}/badge?style=rounded`"
            :alt="info.name"
          >
        </h1>
        <v-divider />
        <div v-if="info.registry">
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
        <div v-if="info.files">
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
          <div v-if="info.stats">
            <h2 class="font-weight-light my-2">Stats:</h2>
            <p class="font-weight-light my-2 caption">Most popular files</p>
            <apexchart type="bar" height="350" :options="chartOptions" :series="info.stats.popular.series" />
            <p class="font-weight-light my-2 caption">Downloads per day</p>
            <apexchart type="line" height="350" :options="chartOptions2" :series="info.stats.downloads.series" />
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import config from '../config'
import { getPackageInfo } from '../utils'

import { mapState } from 'vuex'

export default {
  name: 'TheModal',
  mixins: [getPackageInfo],
  data: () => ({
    config,
    chartOptions: {
      chart: {
        height: 500,
        type: 'bar'
      },
      colors: ['#ffc107'],
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '50%',
          barHeight: '50%',
          distributed: false,
          rangeBarOverlap: false,
          rangeBarGroupRows: false,
          dataLabels: {
            position: 'bottom'
          }
        }
      },
      legend: {
        show: true
      },
      yaxis: {
        max: (v) => v > 100000 ? v / 100 : v
      },
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topRight',
          offsetX: -55,
          offsetY: 0
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#555']
        },
        offsetX: 0
      }
    },
    chartOptions2: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      colors: ['#ffc107'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      }
    }
  }),
  computed: {
    ...mapState({ info: state => state.packageInfo }),
    isVisible: {
      get () { return this.$store.state.modal },
      set (value) { this.$store.commit('showHideModal', { isVisible: value }) }
    }
  },
  filters: {
    icon (value) {
      return value === 'directory' ? 'mdi-folder-outline' : 'mdi-file-outline'
    }
  },
  beforeMount () {
    this.getPackageInfo(this.info.name, this.info.version)
  }
}
</script>

<style lang="scss">
  .v-dialog .v-card { height:100% }
  .icons-column { width: 32px; }
</style>
