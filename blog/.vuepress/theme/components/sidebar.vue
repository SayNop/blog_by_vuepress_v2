<template>
    <div class="folding">
        <div class="sidebar_top card_border" :style="pageData.frontmatter.layout=='detail'?'min-height:1rem':''">
            <div class="tags_brand">{{ pageData.frontmatter.layout == 'detail'?'本文大纲':'文章标签' }}</div>
        </div>
    </div>
</template>


<script setup>
import { usePageData } from "@vuepress/client";

const pageData = usePageData();
</script>


<style scoped lang="scss">
.folding {
    width: var(--sidebar-width);
}
</style>
