<template>
    <!-- 使用冒泡stop，阻止父组件的跳转覆盖子组件 -->
    <span class="article_tag" @click.stop="$router.push('/tag/'+tag_name)">{{ tag_name }}</span>
</template>


<script setup>
const props = defineProps({
    tag_name: String
})
</script>


<style scoped lang="scss">
.article_tag {
    display: inline-block;
    border-radius: 0.5rem;
    border: 2px solid var(--tag-color);
    padding: 0.375rem;
    background: var(--tag-color);
    // margin-bottom 10px
    margin-right: 5px;
    cursor: pointer;
    transition: all .2s ease;
    &:hover, &:active {
        border-color: var(--theme-color)
    }
}
</style>
