import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// 导入构造函数
import router from './router'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
import '@/router/permission'
import * as ELIcons from '@element-plus/icons-vue'

// 实例化pinia
const pinia = createPinia()

const app = createApp(App)
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}

SvgIcon(app)
app.use(pinia).use(router).mount('#app')
