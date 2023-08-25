<template>
    <div>
        <navbar_wrapper />
        <div class="full_page">
            <home_bg />
            <div class="main">
                <div style="display: flex;">
                    <sidebar />
                    <div style="flex-grow: 1;" />
                </div>
            </div>
            <footer_wrapper />
        </div>        
    </div>
</template>


<script>
import navbar_wrapper from '../components/header.vue'
import home_bg from '../components/home_bg.vue'
import footer_wrapper from '../components/footer.vue'
import sidebar from '../components/sidebar.vue'

export default {
    components: {
        navbar_wrapper,
        home_bg,
        footer_wrapper,
        sidebar,
    }
}
</script>


<style scoped lang="scss">
// .full_page {
//     padding-top: var(--header-heigth);
// }
.main {
    margin-left: auto;
    margin-right: auto;
    width: 91%;
}
</style>
