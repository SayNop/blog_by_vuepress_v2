<template>
    <section class="article_sidebar">
        <ul>
            <li class="level2" v-for="item2 in pageData.headers" :key="item2.slug">
                <a class="sidebar-link" :href="'#'+item2.slug">{{ item2.title }}</a>
                <ul v-if="item2.children">
                    <li class="level3" v-for="item3 in item2.children" :key="item3.slug">
                        <a class="sidebar-link" :href="'#'+item3.slug">{{ item3.title }}</a>
                        <ul v-if="item3.children">
                            <li class="level4" v-for="item4 in item3.children" :key="item4.slug">
                                <a class="sidebar-link" :href="'#'+item4.slug">{{ item4.title }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
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
        list-style-type: none;
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