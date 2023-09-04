import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { copyCodePlugin } from "vuepress-plugin-copy-code2"


export default {
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'favicon.ico' }
        ]
    ],
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
        copyCodePlugin({
            selector: [
                '.content_container div[class*="language-"] pre',
            ]
          }),
    ],
}
