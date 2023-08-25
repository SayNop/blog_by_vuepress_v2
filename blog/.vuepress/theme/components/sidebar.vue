<template>
    <div class="folding">
        <div class="sidebar_top card_border" :style="pageData.frontmatter.layout=='detail'?'min-height:1rem':''">
            <div class="tags_brand">{{ pageData.frontmatter.layout == 'detail'?'本文大纲':'文章标签' }}</div>
            <nav_wrapper />
        </div>
        <div class="sidebar_bottom card_border">
            <div class="avatar" style="background-image:url(/assets/imgs/avatar.jpg);"></div>
            <div class="author">Leopold</div>
        </div>
    </div>
</template>


<script setup>
import { usePageData } from "@vuepress/client";

import nav_wrapper from './nav.vue'

const pageData = usePageData();
</script>


<style scoped lang="scss">
.folding {
    width: var(--sidebar-width);
}

.sidebar_top {
    margin-bottom: 1.5rem;
}

.tags_brand {
    padding: 1.2rem;
    background-color: var(--theme-color);
    font-weight: 900;
    color: var(--c-text);
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
</style>
