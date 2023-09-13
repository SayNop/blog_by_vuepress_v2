<template>
    <Base>
        <div class="article_container card_border">
            {{ tagMap }}
        </div>
    </Base>
</template>

<script setup>
import Base from './Base.vue'

import { useBlogCategory } from "vuepress-plugin-blog2/client"

const tagMap = useBlogCategory("tag")
</script>
