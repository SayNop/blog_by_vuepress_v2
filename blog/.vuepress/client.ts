import { defineClientConfig } from '@vuepress/client'
import { createPinia } from 'pinia'

import './theme/styles/index.scss'
import './theme/styles/base.scss'
import './theme/styles/vars.scss'

import Layout from './theme/layouts/Layout.vue'
import NotFound from './theme/layouts/404.vue'
import Detail from './theme/layouts/Detail.vue'
import Category from './theme/layouts/Category.vue'
import CategoryMap from './theme/layouts/CategoryMap.vue'
import Tag from './theme/layouts/Tag.vue'
import TagMap from './theme/layouts/TagMap.vue'


// 原enhanceApp.js。布局文件（md等文件中需要引用的）需要都在此注册，子组件可在父组件中引用，无需在此注册
export default defineClientConfig({
  layouts: {
    Layout,  // 默认布局文件
    NotFound,  // 404时默认渲染组件名为NotFound的组件
    Detail,
    Category,
    CategoryMap,
    Tag,
    TagMap,
  },
  enhance({ app, router, siteData }) {
    // 检测安卓版本
    // const ua = navigator.userAgent.toLowerCase()
    // var version = 0
    // if (ua.indexOf("android") > 0) {
    //   var reg = /android [\d._]+/gi;
    //   var v_info = ua.match(reg);
    //   version = parseInt((v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".").split('.')[0]) //得到版本号4.2.2
    //   console.log(version, 'android version')
    //   if(version < 11) 
    //     alert('安卓浏览器版本过低！')
    // }

    // 如需导入三方组件库
    const pinia = createPinia()
    app.use(pinia)
  },
})
