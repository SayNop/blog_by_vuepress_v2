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
