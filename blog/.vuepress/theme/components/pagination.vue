<template>
    <div class="pagination">
        <router-link :to="link + (page < 3 ? '' : `?page=${page-1}`)">
            {{ page>1 ? '&nbsp;&nbsp;&nbsp;Previois' : "" }}
        </router-link>
        <router-link :to="link + `?page=${page+1}`">
            {{ page<Math.ceil(total/5) ? 'Next&nbsp;&nbsp;&nbsp;' : "" }}
        </router-link>
    </div>
</template>

<script setup>
    const props = defineProps({
        page: Number,
        total: Number,
        link: String
    })
</script>

<style scoped>
.pagination {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.pagination a:hover, :active {
    opacity: .6;
}
</style>
