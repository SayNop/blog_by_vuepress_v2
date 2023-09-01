import { defineClientConfig } from '@vuepress/client'
import { usePageData } from "@vuepress/client";
import { icon_back_to_top } from "@vuepress/plugin-back-to-top/lib/client/styles/back-to-top.svg"

import './theme/styles/index.scss'
import './theme/styles/base.scss'
import './theme/styles/vars.scss'

import NotFound from './theme/layouts/404.vue'
import detail from './theme/layouts/detail.vue'


// 原enhanceApp.js。布局文件（md等文件中需要引用的）需要都在此注册，子组件可在父组件中引用，无需在此注册
export default defineClientConfig({
  // setup() {
  //   const pageData = usePageData();
  // },

  layouts: {
    // 404时默认渲染组件名为NotFound的组件
    NotFound,
    detail
  },
})
