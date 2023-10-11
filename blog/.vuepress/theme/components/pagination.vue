<template>
    <div class="pagination">
        <router-link class='previous_page' v-if="page>1" :to="link + (page < 3 ? '' : `?page=${page-1}`)">
            Previous
        </router-link>
        <span v-else class="previous_page disable">
            Previous
        </span>
        <router-link class='next_page' v-if="page<Math.ceil(total/5)" :to="link + `?page=${page+1}`">
            Next
        </router-link>
        <span v-else class="next_page disable">
            Next
        </span>
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
    text-align: center;
}

.pagination a, .pagination span {
    min-width: 32px;
    padding: 5px 9px;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--fgColor-default, var(--color-fg-default));
    background-color: var(--c-bg);
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 6px;
}

.pagination a:hover {
    text-decoration: none;
    color: var(--theme-color);
    transition-duration: .1s;
}

.pagination span.disable {
    color: var(--code-ln-color);
    cursor: not-allowed;
    border-color: transparent;
}

.pagination .previous_page {
    display: inline-block;
    line-height: 20px;
    background-color: var(--c-bg);
}

.pagination .next_page {
    display: inline-block;
    line-height: 20px;
    background-color: var(--c-bg);
    margin-left: 10px;
}

.pagination .previous_page::before, .pagination .next_page::after {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
    content: "";
    background-color: currentColor;
}

.pagination .previous_page::before {
    margin-right: 4px;
    clip-path: polygon(9.8px 12.8px, 8.7px 12.8px, 4.5px 8.5px, 4.5px 7.5px, 8.7px 3.2px, 9.8px 4.3px, 6.1px 8px, 9.8px 11.7px, 9.8px 12.8px);
}

.pagination .next_page::after {
    margin-left: 4px;
    clip-path: polygon(6.2px 3.2px, 7.3px 3.2px, 11.5px 7.5px, 11.5px 8.5px, 7.3px 12.8px, 6.2px 11.7px, 9.9px 8px, 6.2px 4.3px, 6.2px 3.2px);
}
</style>
