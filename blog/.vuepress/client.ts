import { defineClientConfig } from '@vuepress/client'

import './theme/styles/index.scss'

import NotFound from './theme/layouts/404.vue'


// 原enhanceApp.js。布局文件（md等文件中需要引用的）需要都在此注册，子组件可在父组件中引用，无需在此注册
export default defineClientConfig({
  layouts: {
    // 404时默认渲染组件名为NotFound的组件
    NotFound
  },
})
