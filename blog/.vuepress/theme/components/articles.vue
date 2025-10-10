<template>
    <div>
        <div v-for="item in articles" :key="item.key">
            <div class="article_card card_border" @click="$router.push(item.path)">
                <div class="card_title_container title_color">
                    <div class="article_title title_font">{{ item.info?.title }}</div> 
                    <div class="article_time">{{ item.info?.date.slice(0,10) }}</div>
                </div>
                <div class="card_content_container">
                    <div class="card_content">{{ item.info?.discription }}</div>
                    <div class="card_tag">
                        <category_lable :datas="item.info?.category[0]" />
                        <tag_lable :tag_name="tag"  v-for="tag in item.info?.tags" :key="tag" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import category_lable from './category_lable.vue'
import tag_lable from './tag_lable.vue'

const props = defineProps({
    articles: Array
})
</script>

<style scoped lang="scss">
.article_card {
    margin-bottom: var(--card-margin);
}

.card_title_container {
    line-height: 1.75rem;
    letter-spacing: .025em;
    text-align: center;
    padding: 12px 24px;
    position: absolute;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
}
    
.article_title {
    position: absolute;
    width: 100%;
    bottom: 3rem;
    left: 0;
}

.article_time {
    bottom: 0;
}

.card_content_container {
    position: absolute;
    height: 50%;
    width: 100%;
    bottom: 0;
}

.card_content {
    position: absolute;
    height: 75%;
    width: 100%;
    text-align: left;
    padding: 20px;
}
</style>
