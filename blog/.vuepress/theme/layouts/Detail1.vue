<template>
    <Base>
        <div class="card_border article_container">
            <div class="frontmatter_info">
                <h1>{{ $frontmatter.title }}</h1>
                <div>{{  $frontmatter.date.slice(0,10) }}</div>
                <div class="card_tag frontmatter_tags">
                    <span class="icon">
                        <category_icon />
                    </span>
                    <category_lable :datas="$frontmatter.category[0]" />
                    <span class="icon" style="margin-right: 5px">
                        <tag_icon />
                    </span>
                    <tag_lable :tag_name="tag"  v-for="tag in $frontmatter.tags" :key="tag" />
                </div>
            </div>
            <Content />
            <CommentService :darkmode="comment_dark" />
        </div>
    </Base>
</template>


<script setup>
import '../styles/markdown.scss'

import Base from './Base.vue'
import category_icon from '../components/icons/category.vue'
import category_lable from '../components/category_lable.vue'
import tag_icon from '../components/icons/tag.vue'
import tag_lable from '../components/tag_lable.vue'

import { onMounted } from 'vue'
import { useStatusStore } from '../utils/store'
import { storeToRefs } from 'pinia'

const store = useStatusStore()
const { comment_dark } = storeToRefs(store)

onMounted(() => {
    document.documentElement.setAttribute('style', 'overflow-y: scroll;scroll-behavior: smooth;')
})
</script>


<style scoped lang="scss">
.frontmatter_info {
    padding: var(--content-padding);
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--c-text-quote);
}

.card_tag {
    position: absolute;
    text-align: left;
    width: 100%;
    bottom: 0;
    height: 25%;
}

.frontmatter_tags {
    margin-top: 1rem;
    position: inherit;
    display: flex;
    align-items: center;
}

.giscus-wrapper {
    max-width: inherit;
    padding: var(--content-padding);
}
</style>
