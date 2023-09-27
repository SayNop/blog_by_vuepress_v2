<template>
    <div>
        <header_wrapper :style="{opacity: header_opacity}" @slide_switch="showSlide" />
        <home_bg />
        <div class="main">
            <div style="display: flex;">
                <div class="sider_keeper" :class="is_mobile ? (show_sidebar ? 'show_info' : 'hidden_info') : ''">
                    <sidebar :class="$frontmatter.layout == 'Detail' && is_nav ? 'article_nav' : '' " />
                </div>
                <div class="content_container">
                    <slot></slot>
                    <footer_wrapper />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import header_wrapper from '../components/header.vue'
import home_bg from '../components/home_bg.vue'
import sidebar from '../components/sidebar.vue'
import footer_wrapper from '../components/footer.vue'

import { onMounted, ref } from 'vue'

const header_opacity = ref(0)
const is_mobile = ref(false)
const show_sidebar = ref(false)
const is_nav = ref(false)


const handleScroll = () => {
    const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    header_opacity.value = scrollTop / 100
    // document.documentElement.clientHeight * 0.8(80vh) - header and margin = > document.body.clientHeight * 0.000888888888
    if(!is_mobile.value && scrollTop > document.documentElement.clientHeight * 0.8 - 115)  // 105
        is_nav.value = true
    else
        is_nav.value = false
}

const showSlide = () => {
    show_sidebar.value = !show_sidebar.value
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

<style scoped>
.article_nav {
    position: fixed;
    top: 115px;
    z-index: 9;
}
</style>
