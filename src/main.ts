import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ELIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/style/base.css'

const app = createApp(App)
for (const iconName in ELIcons) {
  app.component(iconName, (ELIcons as any)[iconName])
}
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.mount('#app')
