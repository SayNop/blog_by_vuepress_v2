<template>
    <Base>
        <div class="card_border category_tag_key title_color category_tag_name">所有标签</div>
        <div class="category_tag_card card_border" v-for="(tag_data, name) in tagMap.map" :key="name">
            <div class="category_tag_item_name" @click="$router.push(tag_data.path)">{{ name }}</div>
            <div class="category_tag_item_count" @click="$router.push(tag_data.path)">TOP 10 /共计 {{ tag_data.items.length }} 篇</div>
            <ul>
                <li class="category_tag_item_top10" v-for="article in tag_data.items.slice(0, 10)" :key="article.path">
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
    </Base>
</template>

<script setup>
import Base from './Base.vue'
import category_icon from '../components/icons/category.vue'

import { useBlogCategory } from "vuepress-plugin-blog2/client"

const tagMap = useBlogCategory("tag")
</script>
