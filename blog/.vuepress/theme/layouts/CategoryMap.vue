<template>
    <Base>
        <div class="article_container card_border">
            {{ categoryMap }}
        </div>
    </Base>
</template>

<script setup>
import Base from './Base.vue'

import { useBlogCategory } from "vuepress-plugin-blog2/client"

const categoryMap = useBlogCategory("category")
</script>
