<template>
    <!-- 使用冒泡stop，阻止父组件的跳转覆盖子组件 -->
    <span class="article_category" @click.stop="$router.push('/category/'+datas)">{{ datas }}</span>
</template>


<script setup>
const props = defineProps({
    datas: String
})
</script>

<style scoped lang="scss">
.article_category {
    min-width: 6rem;
    padding: 0 1rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        color: var(--theme-color);
    }
}
</style>
