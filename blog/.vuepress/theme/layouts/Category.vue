<template>
    <Base>
        <div class="card_border category_tag_key">
            <span class="icon category_tag_icon"><category_icon /></span>
            <span class="title_font">{{ $frontmatter.current }}</span>
        </div>
        <articles :articles="article_list" />
        <pagination :page="page" :total="categoryMap.currentItems.length" :link="route.path" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import category_icon from '../components/icons/category.vue'
import articles from '../components/articles.vue'
import pagination from '../components/pagination.vue'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogCategory } from "vuepress-plugin-blog2/client"

import { usePageContent } from '../utils/pagination'

const categoryMap = useBlogCategory("category")

const route = useRoute()
const page = ref(route.query.page ? Number(route.query.page) : 1)

const article_list = ref(usePageContent(categoryMap.value.currentItems, page.value))

watch(() => route.query, (current_query) => {
    if (/^\/category\/.+$/.test(route.path)) {
        page.value = current_query.page ? Number(current_query.page) : 1
        article_list.value = usePageContent(categoryMap.value.currentItems, page.value)
    }
})
</script>
