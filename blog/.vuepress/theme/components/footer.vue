<template>
    <footer class="page_footer">
        <div class="footer_middle card_border">
            <span v-for="item in footerData.copyright" :key="item.text">{{ item.text }} <br></span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeData } from '@vuepress/plugin-theme-data/client'
import type { ThemeData } from '@vuepress/plugin-theme-data/client'

type FooterData = ThemeData<{
    footer: any
}>

const footerData = computed(() => {
    const themeData = useThemeData<FooterData>()
    return themeData.value.footer
})
</script>

<style scoped lang="scss">
.page_footer {
    width: 80%;
    // margin-left: auto;
    // margin-right: auto;
    margin: 2rem auto;
    display: flex;
}

.footer_middle {
    flex-grow: 1;
    min-height: auto;
    padding: 30px;
    width: 50%;
    color: #7a7a7a;
    text-align: center;
}
</style>
