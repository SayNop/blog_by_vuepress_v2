<template>
    <Base>
        <div class="article_container card_border">
            {{ tagMap }}
            <br>
            {{ Object.keys(tagMap.map).length }}
            <br>
            {{ timelines.items.length }}
        </div>
    </Base>
</template>

<script setup>
import Base from './Base.vue'

import { useBlogType, useBlogCategory } from "vuepress-plugin-blog2/client"

const timelines = useBlogType("timeline")
const tagMap = useBlogCategory("tag")
</script>
