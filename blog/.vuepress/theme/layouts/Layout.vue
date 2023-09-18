<template>
    <Base>
        <articles :articles="timelines.items" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import articles from '../components/articles.vue'

import { useRoute } from 'vue-router'
import { useBlogType  } from "vuepress-plugin-blog2/client"

const timelines = useBlogType("timeline")

const route = useRoute();
console.log(route)
console.log(route.query.page)
</script>
