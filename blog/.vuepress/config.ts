import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { copyCodePlugin } from "vuepress-plugin-copy-code2"
import { blogPlugin } from "vuepress-plugin-blog2"
import { commentPlugin } from "vuepress-plugin-comment2"
import { seoPlugin } from "vuepress-plugin-seo2"
import { sitemapPlugin } from "vuepress-plugin-sitemap2"
import { cut } from "nodejs-jieba"
import { searchProPlugin } from "vuepress-plugin-search-pro"
import markdownitmathjax3 from "markdown-it-mathjax3"


export default {
    lang: "zh-CN",
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: '/favicon.ico' }
        ]
    ],
    markdown: {
        lineNumbers: true,
        headers : {level: [2, 3, 4]},
    },
    extendsMarkdown: (md) => {
        md.use(markdownitmathjax3)
        md.linkify.set({ fuzzyEmail: false })
        const origin_code_render = md.renderer.rules.fence
        const update_markdown_theme = (code_render) => (tokens, idx, options, env, self) => {
            const token = tokens[idx]
            const info = token.info ? md.utils.unescapeAll(token.info).trim() : ""
            const theme = info && info.split(' ').length > 1 ? info.split(' ')[1] : null
            const res = code_render(tokens, idx, options, env, self)
            if (theme) {
                const new_res = '<div class="macos ' + res.slice(12,)
                return new_res
            }
            return res
        }
        md.renderer.rules.fence = update_markdown_theme(origin_code_render)
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
            showInMobile: true,
            locales: {
                '/zh/': {
                    copy: "Copy code",
                    copied: "Copied!",
                    hint: "Copied successfully"
                  }
            }
        }),
        commentPlugin({
            provider: "Giscus",
            repo: 'SayNop/SayNop.github.io',
            repoId: "R_kgDOIlAnJQ",
            category:"Announcements",
            categoryId: "DIC_kwDOIlAnJc4CYVx8",
            lightTheme: "light_protanopia",
            darkTheme: "dark_protanopia",
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
        }),
        seoPlugin({
            hostname: 'https://saynop.github.io/'
        }),
        sitemapPlugin({
            hostname: 'https://saynop.github.io/'
        }),
        searchProPlugin({
            indexContent: true,  // 解析文章正文
            locales: {
                "/zh/": {
                  placeholder: "Search",
                },
              },
            hotKeys: [],
            customFields: [
                {
                    getter: ({ frontmatter }) => frontmatter.tags as string[],
                    formatter: `Tag: $content`,
                },
                {
                    getter: ({ frontmatter }) => frontmatter.category as string[],
                    formatter: "Category: $content",
                },
              ],
            indexOptions: {
              tokenize: (text, fieldName) =>
                fieldName === "id" ? [text] : cut(text, true),
            },
        }),
    ],
}
