<template>
    <div class="sider_keeper" :class="is_mobile ? (show_sidebar ? 'show_info' : 'hidden_info') : ''">
        <div class="folding" :class="$frontmatter.layout == 'Detail' && is_nav ? 'article_nav' : '' ">
            <div class="sidebar_top card_border" :style="$frontmatter.layout=='Detail'?'min-height:1rem':''">
                <div class="tags_brand">{{ $frontmatter.layout == 'Detail'?'本文大纲':'文章标签' }}</div>
                <nav_wrapper  v-if="$frontmatter.layout == 'Detail'" />
                <div class="tags" v-else>
                    <tag_lable :tag_name="name" v-for="(val, name, index) in tagMap.map" :key="index" />
                </div>
            </div>
            <div class="sidebar_bottom card_border">
                <div class="avatar" style="background-image:url(/assets/imgs/avatar.jpg);"></div>
                <div class="author">Leopold</div>
                <div class="summary">
                    <div><p @click="$router.push('/')">文章</p></div><div><p @click="$router.push('/categories/')">分类</p></div><div><p @click="$router.push('/tags/')">标签</p></div>
                    <div><p @click="$router.push('/')">{{ timelines.items.length }}</p></div><div><p @click="$router.push('/categories/')">{{ Object.keys(categoryMap.map).length }}</p></div><div><p @click="$router.push('/tags/')">{{ Object.keys(tagMap.map).length }}</p></div>
                </div>
                <div class="connection">
                    <div class="grid_icon"><github_icon class="icon" /></div><div><span @click="open_link(themeData.connection_link.github)">{{ themeData.connection_link.github }}</span></div>
                    <div class="grid_icon"><gitee_icon class="icon" /></div><div><span @click="open_link(themeData.connection_link.gitee)">{{ themeData.connection_link.gitee }}</span></div>
                    <div class="grid_icon"><mail_icon class="icon" /></div><div><span @click="open_link(themeData.connection_link.mail)">{{ themeData.connection_link.mail }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
// import { usePageFrontmatter } from "@vuepress/client"
import { useBlogType, useBlogCategory  } from "vuepress-plugin-blog2/client"
import { useThemeData } from '@vuepress/plugin-theme-data/client'
import type { ThemeData } from '@vuepress/plugin-theme-data/client'

import nav_wrapper from './nav.vue'
import tag_lable from './tag_lable.vue'
import github_icon from './icons/github.vue'
import gitee_icon from './icons/gitee.vue'
import mail_icon from './icons/mail.vue'

import { onMounted, ref } from 'vue'

import { useStatusStore } from '../utils/store'
import { storeToRefs } from 'pinia'


const is_mobile = ref(false)
const is_nav = ref(false)


const store = useStatusStore()
const { show_sidebar } = storeToRefs(store)


// const frontmatter = usePageFrontmatter()

const timelines = useBlogType("timeline")
const categoryMap = useBlogCategory("category")
const tagMap = useBlogCategory("tag")

const themeData = useThemeData<ThemeData>()

const open_link = (link: String) => {window.open('http://'+link)}


const ScrollNav = () => {
    const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    // document.documentElement.clientHeight * 0.8(80vh) - header and margin -> document.body.clientHeight * 0.000888888888
    if(!is_mobile.value && scrollTop > document.documentElement.clientHeight * 0.8 - 115)  // 105
        is_nav.value = true
    else
        is_nav.value = false
}


onMounted(() => {
    if(document.body.clientWidth > 767) {
        window.addEventListener('scroll', ScrollNav)
        is_mobile.value = false
    } else {
        is_mobile.value = true
    }
})
</script>


<style scoped lang="scss">
.folding {
    width: var(--sidebar-width);
}

.article_nav {
    position: fixed;
    top: 115px;
    z-index: 9;
}

.sidebar_top {
    margin-bottom: 1.5rem;
}

.tags_brand {
    padding: 1.2rem;
    background-color: var(--theme-color);
    font-weight: 900;
    color: var(--brand-color);
}

.tags {
    padding: 15px;
    span {
        margin-bottom: 10px;
    }
}

.sidebar_bottom {
    padding: 12px;
    text-align: center;
    min-height: auto;
}

.avatar {
    height: 6rem;
    width: 6rem;
    background-size: cover;
    background-position: center;
    background-color: var(--theme-color);
    border-radius: 9999px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
}

.author {
    font-weight: 700;
    font-size: 1.25rem;
    margin-top: 1rem;
}

.summary {
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin-top: 1rem;
    
    div > p:hover {
        cursor: pointer;
        color: var(--theme-color);
    }
}

.connection {
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.3rem;
    .grid_icon {
        text-align: center;
    }
    div > span {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        &:hover {
            cursor: pointer;
            background-color: var(--tag-color);
            border-radius: 5px;
        }
    }
}

@media(max-width: 767px) {
    .folding {
        width: 91%;
        margin-left: auto;
        margin-right: auto;
    }
    .sidebar_top {
        min-height: auto;
    }
    .connection {
        padding-left: 2rem;
    }
}
</style>
