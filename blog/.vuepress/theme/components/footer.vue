<template>
    <footer class="page_footer">
        <div class="footer_middle card_border">
            <span v-for="item in footerData.copyright" :key="item.text">{{ item.text }} <br></span>
        </div>
    </footer>
</template>


<style scoped lang="scss">
    @import '../styles/footer';
</style>

<script lang="ts">
import { useThemeData } from '@vuepress/plugin-theme-data/client'
import type { ThemeData } from '@vuepress/plugin-theme-data/client'


export default {
    computed: {
        footerData() {
            const themeData = useThemeData<ThemeData>()
            return themeData.value.footer
        }
    }
}
</script>
