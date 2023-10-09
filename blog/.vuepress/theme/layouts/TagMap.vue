<template>
    <Base>
        <div class="card_border category_tag_key title_color category_tag_name">所有标签</div>
        <div class="category_tag_card card_border" v-for="name in tag_list" :key="name">
            <div class="category_tag_item_name" @click="$router.push(tagMap.map[name].path)">{{ name }}</div>
            <div class="category_tag_item_count" @click="$router.push(tagMap.map[name].path)">TOP 10 /共计 {{ tagMap.map[name].items.length }} 篇</div>
            <ul>
                <li class="category_tag_item_top10" v-for="article in tagMap.map[name].items.slice(0, 10)" :key="article.path">
                    <div class="top10_article_title" @click="$router.push(article.path)">
                        <span class="article_hover">{{ article.info.title }}</span>
                    </div>
                    <div class="top10_mobile_hidden">
                        <span style="display: inline-block;vertical-align: text-top;margin-right: 5px;" class="icon"><category_icon /></span>
                        <span> {{ article.info.category[0] }}</span>
                    </div>
                    <div class="top10_article_date">{{ article.info.date.slice(0,10) }}</div>
                </li>
            </ul>
        </div>
        <pagination :page="page" :total="Object.keys(tagMap.map).length" :link="route.path" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import category_icon from '../components/icons/category.vue'
import pagination from '../components/pagination.vue'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogCategory } from "vuepress-plugin-blog2/client"

import { usePageContent } from '../utils/pagination'

const tagMap = useBlogCategory("tag")

const route = useRoute()
const page = ref(route.query.page ? Number(route.query.page) : 1)

const tag_list = ref(usePageContent(Object.keys(tagMap.value.map), page.value))

watch(() => route.query, (current_query) => {
    if (/^\/tags\/$/.test(route.path)) {
        page.value = current_query.page ? Number(current_query.page) : 1
        tag_list.value = usePageContent(Object.keys(tagMap.value.map), page.value)
    }
})
</script>
