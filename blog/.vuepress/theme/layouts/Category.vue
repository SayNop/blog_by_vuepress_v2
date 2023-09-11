<template>
    <div>
        {{ categoryMap }}
    </div>
</template>

<script setup lang="ts">
import { useBlogCategory } from "vuepress-plugin-blog2/client";

const categoryMap = useBlogCategory("category");
console.log(categoryMap.value)
</script>
