<template>
    <section class="article_sidebar">
        <ul>
            <li :class="'level' + item.level" v-for="item in pageData.headers" :key="item.slug">
                <a class="sidebar-link" :href="'#'+item.slug">{{ item.title }}</a>
            </li>
        </ul>
    </section>
</template>


<script setup>
import { usePageData } from "@vuepress/client";

const pageData = usePageData();
</script>


<style scoped lang="scss">
.article_sidebar {
    overflow: auto;
    // max-height 20rem
    // max-height calc(100vh - 487px)
    max-height: calc(100vh - 30rem);
    ul {
        padding: 0;
        margin: 0;
        li {
            line-height: 1.7;
            padding-bottom: 2px;
        }
        .active {
            font-weight: 600;
        }
        .level2 {
            font-size: 0.9rem;
            padding-left: 10px;
        }
        .level3 {
            font-size: 0.8rem;
            padding-left: 20px;
        }
        .level4 {
            font-size: 0.7rem;
            padding-left: 30px;
        }
        a {
            color: var(--font-color);
            text-decoration: inherit;
            &:hover, &:active {
                font-weight: 600;
                // text-decoration-line underline
            }
        }
    }
}
</style>