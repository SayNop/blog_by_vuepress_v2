<template>
    <div>
        <navbar_wrapper />
        <br>
        <footer_wrapper />
    </div>
</template>


<script>
import navbar_wrapper from '../components/header.vue'
import pull_down_icon from '../components/icons/pull_down.vue'
import footer_wrapper from '../components/footer.vue'

export default {
    components: {
        navbar_wrapper,
        pull_down_icon,
        footer_wrapper,
    }
}
</script>
