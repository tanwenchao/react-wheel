
// ref: https://umijs.org/config/
import { resolve } from 'path'
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'react-wheel',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  alias: {
    api: resolve(__dirname, 'src/api'),
    assets: resolve(__dirname, 'src/assets'),
    config: resolve(__dirname, 'src/config'),
    services: resolve(__dirname, 'src/services'),
    utils: resolve(__dirname, 'src/utils'),
    components: resolve(__dirname, 'src/components'),
    libs: resolve(__dirname, 'src/libs')
  },
  theme: {
    "@primary-color": "#00aaf7"
  }
}
