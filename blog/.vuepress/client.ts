import { defineClientConfig } from '@vuepress/client'

import './theme/styles/index.scss'
import './theme/styles/base.scss'
import './theme/styles/vars.scss'

import Layout from './theme/layouts/Layout.vue'
import NotFound from './theme/layouts/404.vue'
import detail from './theme/layouts/detail.vue'
import Category from './theme/layouts/Category.vue'
import CategoryMap from './theme/layouts/CategoryMap.vue'
import Tag from './theme/layouts/Tag.vue'
import TagMap from './theme/layouts/TagMap.vue'


// 原enhanceApp.js。布局文件（md等文件中需要引用的）需要都在此注册，子组件可在父组件中引用，无需在此注册
export default defineClientConfig({
  layouts: {
    Layout,  // 默认布局文件
    NotFound,  // 404时默认渲染组件名为NotFound的组件
    detail,
    Category,
    CategoryMap,
    Tag,
    TagMap,
  },
  // enhance({ app, router, siteData }) {
  //   // 如需导入三方组件库
  // },
})
