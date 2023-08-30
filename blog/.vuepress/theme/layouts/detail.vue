<template>
    <div>
        <header_wrapper :style="{opacity: header_opacity}"/>
        <div class="full_page">
            <home_bg />
            <div class="main">
                <div style="display: flex;">
                    <!-- <div class="sider_keeper" v-if="!is_mobile && is_nav" /> -->
                    <div class="sider_keeper"><sidebar :class="is_mobile ? (show_sidebar ? 'show_info' : 'hidden_info') : (is_nav ? 'article_nav' : '') "/></div>
                    <div class="content_container">
                        <div class="card_border article_container">
                            <div class="frontmatter_info">
                                <h1>{{ frontmatter.title }}</h1>
                                <div>{{  frontmatter.date.slice(0,10) }}</div>
                                <div class="card_tag frontmatter_tags">
                                    <span class="icon">
                                        <category_icon />
                                    </span>
                                    <category_lable :datas="frontmatter.category"/>
                                    <span class="icon" style="margin-right: 5px">
                                        <tag_icon/>
                                    </span>
                                    <tag_lable :tag_name="tag"  v-for="tag in frontmatter.tags" :key="tag" />
                                </div>
                            </div>
                            <Content />
                        </div>
                        <footer_wrapper />
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>


<script setup>
import '../styles/markdown.scss'

import header_wrapper from '../components/header.vue'
import home_bg from '../components/home_bg.vue'
import footer_wrapper from '../components/footer.vue'
import sidebar from '../components/sidebar.vue'
import category_icon from '../components/icons/category.vue'
import category_lable from '../components/category_lable.vue'
import tag_icon from '../components/icons/tag.vue'
import tag_lable from '../components/tag_lable.vue'

import { onMounted, ref } from 'vue'
import { usePageFrontmatter } from "@vuepress/client";

const header_opacity = ref(0)
const is_mobile = ref(false)
const is_nav = ref(false)
const show_sidebar = ref(false)

const frontmatter = usePageFrontmatter()

const handleScroll = () => {
    const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    header_opacity.value = scrollTop / 100
    // document.documentElement.clientHeight * 0.8(80vh) - header and margin = > document.body.clientHeight * 0.000888888888
    if(frontmatter.value.layout == 'detail' && scrollTop > document.documentElement.clientHeight * 0.8 - 115)
        is_nav.value = true
    else
        is_nav.value = false
}

onMounted(() => {
    if(document.body.clientWidth > 767) {
            // 滚动触发头部与文章页导航
        window.addEventListener('scroll', handleScroll)
        document.body.addEventListener('touchstart',function(){})
        is_mobile.value = false
    } else {
        is_mobile.value = true
    }
})
</script>


<style scoped lang="scss">
.main {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 1rem;
    width: 91%;
}

.article_container {
    padding: 1rem;
    min-height: inherit;
}

.frontmatter_info {
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--c-text-quote);
}

.card_tag {
    position: absolute;
    text-align: left;
    width: 100%;
    bottom: 0;
    height: 25%;
}

.frontmatter_tags {
    margin-top: 1rem;
    position: inherit;
    display: flex;
    align-items: center;
}

.sider_keeper {
    width: var(--sidebar-width);
}

.article_nav {
    position: fixed;
    top: 115px;
    z-index: 9;
}
</style>
