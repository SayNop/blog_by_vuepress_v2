<template>
    <div>
        <header_wrapper :style="{opacity: header_opacity}" @slide_switch="showSlide" />
        <home_bg />
        <div class="main">
            <div style="display: flex;">
                <div class="sider_keeper" :class="is_mobile ? (show_sidebar ? 'show_info' : 'hidden_info') : ''">
                    <sidebar :class="is_mobile ? '' : (is_nav ? 'article_nav' : '')" />
                </div>
                <div class="content_container">
                    <div class="card_border article_container">
                        <div class="frontmatter_info">
                            <h1>{{ $frontmatter.title }}</h1>
                            <div>{{  $frontmatter.date.slice(0,10) }}</div>
                            <div class="card_tag frontmatter_tags">
                                <span class="icon">
                                    <category_icon />
                                </span>
                                <category_lable :datas="$frontmatter.category[0]" />
                                <span class="icon" style="margin-right: 5px">
                                    <tag_icon />
                                </span>
                                <tag_lable :tag_name="tag"  v-for="tag in $frontmatter.tags" :key="tag" />
                            </div>
                        </div>
                        <Content />
                        <CommentService :darkmode="is_dark" />
                    </div>
                    <footer_wrapper />
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

import { ref, onMounted, onUnmounted } from 'vue'
// import { usePageFrontmatter } from "@vuepress/client";

const header_opacity = ref(0)
const is_mobile = ref(false)
const is_nav = ref(false)
const show_sidebar = ref(false)
const is_dark = ref(false)

// const frontmatter = usePageFrontmatter()

const handleScroll = () => {
    const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    header_opacity.value = scrollTop / 100
    // document.documentElement.clientHeight * 0.8(80vh) - header and margin = > document.body.clientHeight * 0.000888888888
    if(scrollTop > document.documentElement.clientHeight * 0.8 - 115)  // 105
        is_nav.value = true
    else
        is_nav.value = false
}

const showSlide = () => {
    show_sidebar.value = !show_sidebar.value
}

onMounted(() => {
    document.documentElement.setAttribute('style', 'overflow-y: scroll;scroll-behavior: smooth;')
    // 评论组件主题
    is_dark.value = window.localStorage.getItem('theme') == 'dark' ? true : false
    window.addEventListener("storage", function(){
        is_dark.value = window.localStorage.getItem('theme') == 'dark' ? true : false
    })
    // header透明度
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
.frontmatter_info {
    padding: var(--content-padding);
    text-align: center;
    margin-bottom: 2rem;
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

.article_nav {
    position: fixed;
    top: 115px;
    z-index: 9;
}

.giscus-wrapper {
    max-width: inherit;
    padding: var(--content-padding);
}
</style>
