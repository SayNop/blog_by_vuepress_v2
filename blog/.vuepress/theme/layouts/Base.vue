<template>
    <div>
        <header_wrapper :style="{opacity: header_opacity}" />
        <home_bg />
        <div class="main">
            <div style="display: flex;">
                <sidebar />
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


const handleScroll = () => {
    const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    header_opacity.value = scrollTop / 100
}

onMounted(() => {
    if(document.body.clientWidth > 767)
        window.addEventListener('scroll', handleScroll)
})
</script>
