const path = require('path')
import legacy from '@vitejs/plugin-legacy'

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    hot: true
  },
  plugins: [
    legacy(),
  ],
  base: "/netmonsterdatagenerator/"
}