<template>
    <Base>
        <div class="card_border category_tag_key title_color category_tag_name">所有分类</div>
        <!-- <div class="category_tag_card card_border" v-for="(cate_data, name) in categoryMap.map" :key="name"> -->
        <div class="category_tag_card card_border" v-for="name in category_list" :key="name">
            <!-- <div class="category_tag_item_name" @click="$router.push(cate_data.path)">{{ name }}</div> -->
            <div class="category_tag_item_name" @click="$router.push(categoryMap.map[name].path)">{{ name }}</div>
            <!-- <div class="category_tag_item_count" @click="$router.push(cate_data.path)">TOP 10 /共计 {{ cate_data.items.length }} 篇</div> -->
            <div class="category_tag_item_count" @click="$router.push(categoryMap.map[name].path)">TOP 10 /共计 {{ categoryMap.map[name].items.length }} 篇</div>
            <ul>
                <!-- <li class="category_tag_item_top10" v-for="article in cate_data.items.slice(0, 10)" :key="article.path"> -->
                <li class="category_tag_item_top10" v-for="article in categoryMap.map[name].items.slice(0, 10)" :key="article.path">
                    <div class="top10_article_title" @click="$router.push(article.path)">
                        <span class="article_hover">{{ article.info.title }}</span>
                    </div>
                    <!-- multi tags -->
                    <div class="top10_article_other_info">
                        <div class="top10_mobile_hidden">
                            <span style="display: inline-block;vertical-align: text-top;margin-right: 5px;" class="icon"><tag_icon /></span>
                            <span> {{ article.info.tags.join(', ') }}</span>
                        </div>
                        <div class="top10_article_date">{{ article.info.date.slice(0,10) }}</div>
                    </div>
                </li>
            </ul>
        </div>
        <pagination :page="page" :total="Object.keys(categoryMap.map).length" :link="route.path" />
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import tag_icon from '../components/icons/tag.vue'
import pagination from '../components/pagination.vue'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogCategory } from "vuepress-plugin-blog2/client"

import { usePageContent } from '../utils/pagination'

const categoryMap = useBlogCategory("category")

const route = useRoute()
const page = ref(route.query.page ? Number(route.query.page) : 1)

const category_list = ref(usePageContent(Object.keys(categoryMap.value.map), page.value))

watch(() => route.query, (current_query) => {
    if (/^\/categories\/$/.test(route.path)) {
        page.value = current_query.page ? Number(current_query.page) : 1
        category_list.value = usePageContent(Object.keys(categoryMap.value.map), page.value)
    }
})
</script>
