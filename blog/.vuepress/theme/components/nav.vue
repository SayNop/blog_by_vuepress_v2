<template>
    <section class="article_sidebar">
        <ul>
            <li class="level2" v-for="item2 in pageData.headers" :key="item2.slug">
                <a class="sidebar-link" :href="'#'+item2.slug" @click="show_sidebar=false">{{ item2.title }}</a>
                <ul v-if="item2.children" class="level3">
                    <li v-for="item3 in item2.children" :key="item3.slug">
                        <a class="sidebar-link" :href="'#'+item3.slug" @click="show_sidebar=false">{{ item3.title }}</a>
                        <ul v-if="item3.children" class="level4">
                            <li v-for="item4 in item3.children" :key="item4.slug">
                                <a class="sidebar-link" :href="'#'+item4.slug" @click="show_sidebar=false">{{ item4.title }}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { usePageData } from "@vuepress/client";
import { useStatusStore } from '../utils/store'
import { storeToRefs } from 'pinia'


const pageData = usePageData()

const store = useStatusStore()
const { show_sidebar } = storeToRefs(store)

const target = ref('')

// document对象 直接在声明变量时使用会发生异常 可在此处声明变量名后在mounted中通过document赋值
const titles = ref()
const links = ref()

const scroll_acitve = () => {
    let viewPortHeight = window.innerHeight || documentElement.clientHeight
    for (let i = 0; i < titles.value.length; i++) {
        let { 
            top,
            left, 
            bottom, 
            right
        } = titles.value[i].getBoundingClientRect()
        if (top >= 0 && bottom <= viewPortHeight) {
            target.value = titles.value[i].href
            break
        }
    }
    if (target.value) {
        for (var link of links.value) {
            if (link.href == target.value)
                link.classList.add('active')
            else
                link.classList.remove('active')
        }
    }
}

onMounted(() => {
    // 在函数中声明将在每次滚动时都进行获取
    titles.value = document.getElementsByClassName('header-anchor')
    links.value = document.getElementsByClassName('sidebar-link')
    window.addEventListener('scroll', scroll_acitve, true)
})
</script>


<style scoped lang="scss">
.article_sidebar {
    overflow: auto;
    max-height: calc(100vh - 34.5rem);
    padding: .75rem 0;
    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        li {
            line-height: 1.7;
        }
        a {
            display: inline-block;
            color: var(--c-text);
            text-decoration: inherit;
            // font-weight: 400;
            padding: .15rem .25rem;
            &:hover, &:active {
                font-weight: var(--active-font);
            }
        }
        .active {
            font-weight: var(--active-font);
            color: var(--theme-color);
        }
        .level2 {
            // font-size: .95rem;
            font-size: .9rem;
            padding-left: 0.5rem;
        }
        .level3 {
            // font-size: .9rem;
            font-size: .85rem;
            padding-left: 1rem;
        }
        .level4 {
            // font-size: .85rem;
            // padding-left: 1.5rem;
            font-size: .8rem;
            padding-left: 1rem;
        }
        .level3 a, .level4 a {
            padding: .1rem .25rem;
        }
    }
}
</style>