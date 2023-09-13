<template>
    <div>
        <header_wrapper :style="{opacity: header_opacity}" @slide_switch="showSlide"/>
        <div class="full_page">
            <home_bg />
            <div class="main">
                <div style="display: flex;">
                    <sidebar class="sider_keeper" :class="is_mobile ? (show_sidebar ? 'show_info' : 'hidden_info') : ''"/>
                    <div class="content_container">
                        <slot></slot>
                        <!-- 引用带插槽的组件必须大写 -->
                        <footer_wrapper />
                    </div>
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


const handleScroll = () => {
    const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    header_opacity.value = scrollTop / 100
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
