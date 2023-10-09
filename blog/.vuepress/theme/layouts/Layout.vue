<template>
    <Base>
        <articles :articles="article_list" />
        <pagination :page="page" :total="timelines.items.length" :link="route.path" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import articles from '../components/articles.vue'
import pagination from '../components/pagination.vue'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogType } from "vuepress-plugin-blog2/client"

import { usePageContent } from '../utils/pagination'

const timelines = useBlogType("timeline")

const route = useRoute()
const page = ref(route.query.page ? Number(route.query.page) : 1)

const article_list = ref(usePageContent(timelines.value.items, page.value))

watch(() => route.query, (current_query) => {
    if (/^\/$/.test(route.path)) {
        page.value = current_query.page ? Number(current_query.page) : 1
        article_list.value = usePageContent(timelines.value.items, page.value)
    }
})
</script>
