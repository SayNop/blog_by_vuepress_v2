<template>
    <Base>
        <div class="card_border category_tag_key">
            <span class="icon category_tag_icon"><category_icon /></span>
            <span class="title_font">{{ $frontmatter.current }}</span>
        </div>
        <articles :articles="categoryMap.currentItems" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import category_icon from '../components/icons/category.vue'
import articles from '../components/articles.vue'

import { useBlogCategory } from "vuepress-plugin-blog2/client"

const categoryMap = useBlogCategory("category")
</script>
