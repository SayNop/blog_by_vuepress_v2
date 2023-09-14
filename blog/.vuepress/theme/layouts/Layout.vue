<template>
    <Base>
        <articles :articles="timelines.items" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import articles from '../components/articles.vue'

import { useBlogType  } from "vuepress-plugin-blog2/client"

const timelines = useBlogType("timeline")
</script>
