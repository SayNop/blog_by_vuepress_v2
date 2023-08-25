<template>
    <div>
        <navbar_wrapper />
        <div class="full_page">
            <home_bg />
            <div class="main">
                <div style="display: flex;">
                    <sidebar />
                    <div style="flex-grow: 1;">
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
</script>


<style scoped lang="scss">
// .full_page {
//     padding-top: var(--header-heigth);
// }
.main {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 1rem;
    width: 91%;
}
</style>
