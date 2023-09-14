<template>
    <Base>
        <div class="card_border category_tag_key">
            <span class="icon category_tag_icon"><tag_icon /></span>
            <span class="title_font">{{ $frontmatter.current }}</span>
        </div>
        <articles :articles="tagMap.currentItems" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import tag_icon from '../components/icons/tag.vue'
import articles from '../components/articles.vue'

import { useBlogCategory } from "vuepress-plugin-blog2/client"

const tagMap = useBlogCategory("tag")
</script>
