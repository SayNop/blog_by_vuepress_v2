<template>
    <div class="background">
        <pull_down_icon />
    </div>
</template>


<script>
import pull_down_icon from './icons/pull_down.vue'

export default {
    components: {
        pull_down_icon,
    }
}
</script>

<style scoped lang="scss">
.background {
   height: 80vh;
   position: relative; 
}
</style>
