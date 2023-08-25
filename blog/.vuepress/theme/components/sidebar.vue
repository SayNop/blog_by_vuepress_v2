<template>
    <div class="folding">
        <div class="sidebar_top card_border" :style="pageData.frontmatter.layout=='detail'?'min-height:1rem':''">
            <div class="tags_brand">{{ pageData.frontmatter.layout == 'detail'?'本文大纲':'文章标签' }}</div>
            <nav_wrapper />
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

.tags_brand {
    padding: 1.2rem;
    background-color: var(--theme-color);
    font-weight: 900;
    color: var(--c-text);
}
</style>
