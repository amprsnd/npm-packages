<template>
  <div v-if="info.stats">
    <h2 class="font-weight-light my-2">Stats:</h2>
    <p class="font-weight-light my-2 caption">Most popular files</p>
    <apexchart type="bar" height="350" :options="popular" :series="info.stats.popular.series" />
    <p class="font-weight-light my-2 caption">Downloads per day</p>
    <apexchart type="line" height="350" :options="downloads" :series="info.stats.downloads.series" />
  </div>
</template>

<script>
export default {
  name: 'TheModalStats',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    popular: {
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
    downloads: {
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
  })
}
</script>

<style lang="scss">

</style>
