import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#673ab7',
        secondary: '#9c27b0',
        accent: '#ffc107',
        error: '#f44336',
        warning: '#ff9800',
        info: '#03a9f4',
        success: '#8bc34a'
      }
    }
  }
})
