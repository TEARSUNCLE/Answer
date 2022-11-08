// #ifdef VUE3
import { createSSRApp } from "vue"
import uviewPlus from 'uview-plus'
import App from "./App.vue"

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  // uni.$u.config.unit = 'rpx'
  return {
    app,
  }
}
// #endif