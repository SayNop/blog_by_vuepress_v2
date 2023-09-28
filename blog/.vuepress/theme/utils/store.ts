import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useStatusStore = defineStore('status', () => {
    const show_sidebar = ref(false)
    const is_dark = ref(false)
    const is_mobile = ref(false)

    const change_sidebar = () => {
        show_sidebar.value = !show_sidebar.value
    }

    const change_dark_mode = () => {
        is_dark.value = !is_dark.value
    }

    return { show_sidebar, is_dark, is_mobile, change_sidebar, change_dark_mode }
})
