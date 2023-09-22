import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { copyCodePlugin } from "vuepress-plugin-copy-code2"
import { blogPlugin } from "vuepress-plugin-blog2"
import { commentPlugin } from "vuepress-plugin-comment2";


export default {
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: '/favicon.ico' }
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    extendsMarkdown: (md) => {
        console.log(md.renderer)
    },
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
        mediumZoomPlugin({
        }),
        copyCodePlugin({
            selector: [
                '.content_container div[class*="language-"] pre',
            ],
            showInMobile: true
        }),
        commentPlugin({
            provider: "Giscus",
            repo: 'SayNop/SayNop.github.io',
            repoId: "R_kgDOIlAnJQ",
            category:"Announcements",
            categoryId: "DIC_kwDOIlAnJc4CYVx8",
        }),
        blogPlugin({
            // 指定文章路径 不在detail内将返回false，不被统计
            filter: ({ filePathRelative }) => filePathRelative ? filePathRelative.startsWith("detail/") : false,
            // 文章信息数组，渲染列表使用
            getInfo: ({ frontmatter, title }) => ({
                title,
                date: frontmatter.date || null,
                discription: frontmatter.discription || '',
                category: frontmatter["category"] || [],
                tags: frontmatter["tags"] || [],
            }),
            // 单文章多属性分类 采集器
            category: [
                {
                    key: "category",
                    path: "/categories/",
                    getter: ({ frontmatter }) => <string[]>frontmatter.category || [],
                    // 按时间降序
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date as Date).getTime() -
                        new Date(pageA.frontmatter.date as Date).getTime(),
                    layout: "CategoryMap",
                    frontmatter: () => ({ title: "Categories" }),
                    itemPath: "/category/:name/",
                    itemLayout: "Category",
                    itemFrontmatter: (name) => ({ 
                        title: `Category ${name}`,
                        current: name
                    }),
                },
                {
                    key: "tag",
                    path: '/tags/',
                    getter: ({ frontmatter }) => <string[]>frontmatter.tags || [],
                    layout: "TagMap",
                    frontmatter: () => ({ title: "Tags" }),
                    itemLayout: "Tag",
                    itemFrontmatter: (name) => ({
                        title: `Tag ${name}`,
                        current: name
                    }),
                },
            ],
            type: [
                {
                    key: "timeline",
                    // 有时间的md文档
                    filter: (page) => page.frontmatter.date instanceof Date,
                    // 按时间降序
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date as Date).getTime() -
                        new Date(pageA.frontmatter.date as Date).getTime(),
                    path: "/",
                    layout: "Timeline",
                    frontmatter: () => ({ title: "Index | Leopold's blog" }),
                },
            ],
        })
    ],
}
