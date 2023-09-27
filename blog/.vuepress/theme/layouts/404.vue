<template>
    <div style="color:var(--font-color)">
        <div style="display:flex;text-align:center;flex-direction:column;">
            <div class="log_404">404</div>
            <div class="msg_404">Page not found</div>
            <div>
                <router-link class="home_btn" to="/">Back to Home</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/404'
</style>
