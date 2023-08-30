---
layout: detail
title: vuepress v1迁移到v2
date: 2023-08-08
discription: '测试md渲染'
category: test
tags:
    - test
---



参考文章 `https://juejin.cn/post/7136825713411227679`



## 几个关键变化

- 样式表的变化

  - 根据[官方文档](https://v2.vuepress.vuejs.org/zh/guide/migration.html#%E8%B0%83%E8%89%B2%E6%9D%BF%E7%B3%BB%E7%BB%9F%E5%8F%98%E6%9B%B4)，调色盘不再支持。需要安装[@vuepress/plugin-palette](https://v2.vuepress.vuejs.org/zh/reference/plugin/palette.html) 。
  - 且`stylus`不在默认支持，需要手动安装依赖
  - `index`样式表不在默认引入，需要手动引入
- 布局文件的变化
  - 默认布局路径不再是`.vuepress/theme/layouts/Layout.vue`，`markdown`文件`frontmatter`中指明的`layout`布局文件必须创建
  - 所有布局文件需要在`.vuepress/client.ts`注册
  - `404.vue`不再是自定义主题默认404时返回的布局文件
- 配置文件的变化

  - `.vuepress/enhanceApp.js`重命名为 `.vuepress/client.{js,ts}` ，且不再支持`common.js`
- 语法变化
  - 从vue2到vue3，使用`<script setup>`语法糖，从定义变量到声明函数的写法都出现的了变化



## 404布局

由于vuepress v2的404默认布局为`NotFound`(同vue插件的layouts可查看，两个默认布局为`Layout`和`NotFound`)。

编写404的布局文件，在`.vuepress/client.ts`注册为`NotFound`即可生效

```tsx macos
import { defineClientConfig } from '@vuepress/client'

import NotFound from './theme/layouts/404.vue'


// 原enhanceApp.js。布局文件（md等文件中需要引用的）需要都在此注册，子组件可在父组件中引用，无需在此注册
export default defineClientConfig({
  layouts: {
    NotFound
  },
})
```



 

## 主题配置变量存储的变化

- v1

  - 在配置文件里配置一些变量（如github链接等信息）

    ```js
    // vuepress v1
    // .vuepress/config.js
    module.exports = {
        themeConfig: {
            footer: {
              copyright: [
                {
                  text: 'Released under the MIT License.',
                },
                {
                  text: 'Copyright © 2023-present xxx',
                },
              ],
            },
            connection_link: {
                github: 'github.com/xxx',
                gitee: 'gitee.com/xxx',
                mail: 'xxx@xx.com'
            },
        },
    }
    ```

  - vue组件中通过 `$themeConfig` 直接访问 `themeConfig`，从而进行渲染。

    ```vue
    <template>
        <footer class="page_footer">
            <div class="footer_middle card_border">
              	<!-- 通过$themeConfig读取配置文件中存储的变量 -->
                <span v-for="item in $themeConfig.footer.copyright" :key="item.text">{{ item.text }} <br></span>
            </div>
        </footer>
    </template>
    
    <style scoped lang="stylus">
        @import '../styles/footer'
    </style>
    
    ```

- 在v2中

  - 根据[官方文档](https://v2.vuepress.vuejs.org/zh/guide/migration.html#%E7%BB%99%E4%B8%BB%E9%A2%98%E4%BD%9C%E8%80%85)，`$themeConfig` 已经从用户配置和站点数据中移除。现在需要使用 [@vuepress/plugin-theme-data](https://v2.vuepress.vuejs.org/zh/reference/plugin/theme-data.html) 插件进行配置

    ```tsx
    // vuepress v2
    // .vuepress/config.ts
    import { themeDataPlugin } from '@vuepress/plugin-theme-data'
    
    
    export default {
        plugins: [
          themeDataPlugin({
            themeData: {
                footer: {
                    copyright: [
                    {
                        text: 'Released under the MIT License.',
                    },
                    {
                        text: 'Copyright © 2023-present Leopold',
                    },
                    ],
                },
                connection_link: {
                    github: 'github.com/SayNop',
                    gitee: 'gitee.com/WhenTimeGoesBy',
                    mail: 'fur999immer@gmail.com'
                },
            }
        }),
      ],
    }
    ```

  - 在vue组件中通过插件配合`computed`进行读取

    ```vue
    <template>
        <footer class="page_footer">
            <div class="footer_middle card_border">
                <span v-for="item in footerData.copyright" :key="item.text">{{ item.text }} <br></span>
            </div>
        </footer>
    </template>
    
    <style scoped lang="stylus">
        // scoped: 该组件才能使用的样式
        @import '../styles/footer'
    </style>
    
    <script lang="ts">
    import { useThemeData } from '@vuepress/plugin-theme-data/client'
    import type { ThemeData } from '@vuepress/plugin-theme-data/client'
    
    
    export default({
        computed: {
          	// 通过computed返回配置文件中配置的变量
            footerData() {
                const themeData = useThemeData<ThemeData>()
                return themeData.value.footer
            }
        }
    })
    </script>
    
    ```

## 框架的搭建

### 环境的安装

```bash
# 初始化
yarn init
# 安装vuepress2
yarn add vuepress@next
```



### Vue2迁移Vue3

vue3常使用`<script setup>`语法糖进行编写

- 以header组件为例说明常用写法的不同

    - vue2

    ```js
    export default {
            // 声明当前组件名
        name: 'header_wrapper',
        
            // 组件变量
            data() {
            return {
                is_dark: false,
                show_slide: false,
            }
        }, 
    
        // 声明组件方法
        methods: {
            handleDark(){
                this.is_dark = !this.is_dark
                if(this.is_dark){
                    document.documentElement.className = 'dark'
                    localStorage.setItem('theme', 'dark')

                } else {
                    document.documentElement.className = ''
                    localStorage.setItem('theme', 'light')
                }
            },
            show_Slide(){
                // 触发事件
                this.$emit('slide_switch')
            }
        },
        
        // 初始化执行函数
        mounted() {
            if( localStorage.getItem('theme') ) {
                if( localStorage.getItem('theme') == 'dark' ) {
                    this.is_dark=true
                    document.documentElement.className = 'dark'
                } else {
                    this.is_dark=false
                    document.documentElement.className = ''
                }
            } else {
                localStorage.setItem('theme', 'light')
                this.is_dark = false
            }
            // window.addEventListener('scroll', this.handleScroll, true)
            // if(window.screen.availWidth > 767) document.body.addEventListener('touchstart',function(){})
            if(document.body.clientWidth > 767) document.body.addEventListener('touchstart',function(){})
        }
    }
    ```

    - vue3

    ```js
    import {getCurrentInstance, ref, onMounted} from 'vue'

    // 组件导入后无需声明
    import icon_sun from './icons/sun.vue'
    import icon_moon from './icons/moon.vue'

    // 定义简单类型变量
    const is_dark = ref(false)
    const show_slide = ref(false)

    // 定义方法
    const handleDark = () => {
        is_dark.value = !is_dark.value
        if( is_dark.value ){
            document.documentElement.className = 'dark'
            localStorage.setItem('theme', 'dark')

        } else {
            document.documentElement.className = ''
            localStorage.setItem('theme', 'light')
        }
    }

    const instance = getCurrentInstance();
    const emit = instance.emit;

    const show_Slide = () => {
        // 触发事件
        emit('slide_switch')
    }

    // 初始化
    onMounted(() => {
        if( localStorage.getItem('theme') ) {
            if( localStorage.getItem('theme') == 'dark' ) {
                is_dark.value = true
                setTimeout(() => {
                    document.documentElement.className = 'dark'
                }, 50);
                // 加载顺序与vue2不同，通过延时使其正常赋值
                // document.documentElement.className = 'dark'
            } else {
                is_dark.value = false
                document.documentElement.className = ''
            }
        } else {
            localStorage.setItem('theme', 'light')
            is_dark = false
        }
        // window.addEventListener('scroll', this.handleScroll, true)
        // if(window.screen.availWidth > 767) document.body.addEventListener('touchstart',function(){})
        if(document.body.clientWidth > 767) document.body.addEventListener('touchstart',function(){})
    })
    ```

- 利用`props`父组件向子组件传值
    - vue2
    ```js
    export default {
        props: [
            'datas'  // 组件中使用datas直接获取到传入值
        ],
    }
    ```

    - vue3
    ```js
    const props = defineProps({
        datas: String  // 声明props变量类型
    })
    ```
