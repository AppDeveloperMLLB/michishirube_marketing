import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#667eea',
          secondary: '#764ba2',
          accent: '#f093fb',
          error: '#f56565',
          warning: '#ed8936',
          success: '#48bb78',
          info: '#4299e1',
          surface: '#ffffff',
          background: '#f7fafc',
          'on-primary': '#ffffff',
          'on-secondary': '#ffffff',
          'on-surface': '#1a202c',
          'on-background': '#1a202c',
        }
      }
    }
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})