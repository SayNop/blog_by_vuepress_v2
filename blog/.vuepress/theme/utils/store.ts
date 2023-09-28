import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useStatusStore = defineStore('status', () => {
    const show_sidebar = ref(false)
    const comment_dark = ref(false)

    const change_sidebar = () => {
        show_sidebar.value = !show_sidebar.value
    }

    const change_comment_theme = () => {
        comment_dark.value = !comment_dark.value
    }

    return { show_sidebar, comment_dark, change_sidebar, change_comment_theme }
})
