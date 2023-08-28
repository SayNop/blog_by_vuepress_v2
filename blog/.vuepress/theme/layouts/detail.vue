<template>
    <div>
        <navbar_wrapper />
        <div class="full_page">
            <home_bg />
            <div class="main">
                <div style="display: flex;">
                    <sidebar />
                    <div class="content_container">
                        <div class="card_border article_container">
                            <div class="frontmatter_info">
                                <h1>{{ pageData.frontmatter.title }}</h1>
                                <div>{{  pageData.frontmatter.date.slice(0,10) }}</div>
                                <div class="card_tag frontmatter_tags">
                                    <span class="icon">
                                        <category_icon />
                                    </span>
                                    <category_lable :datas="pageData.frontmatter.category"/>
                                    <span class="icon" style="margin-right: 5px">
                                        <tag_icon/>
                                    </span>
                                    <tag_lable :tag_name="tag"  v-for="tag in pageData.frontmatter.tags" :key="tag" />
                                </div>
                            </div>
                            <Content />
                        </div>
                        <footer_wrapper />
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>


<script setup>
import navbar_wrapper from '../components/header.vue'
import home_bg from '../components/home_bg.vue'
import footer_wrapper from '../components/footer.vue'
import sidebar from '../components/sidebar.vue'
import category_icon from '../components/icons/category.vue'
import category_lable from '../components/category_lable.vue'
import tag_icon from '../components/icons/tag.vue'
import tag_lable from '../components/tag_lable.vue'


import { usePageData } from "@vuepress/client";

const pageData = usePageData();
</script>


<style scoped lang="scss">
.main {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 1rem;
    width: 91%;
}

.article_container {
    padding: 1rem;
    min-height: inherit;
}

.frontmatter_info {
    padding: 1rem;
    text-align: center;
}

.card_tag {
    position: absolute;
    text-align: left;
    width: 100%;
    bottom: 0;
    height: 25%;
}

.frontmatter_tags {
    margin: 1rem 0;
    position: inherit;
    display: flex;
    align-items: center;
}
</style>
