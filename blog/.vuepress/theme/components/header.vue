<template>
    <header class="header">
        <div class="header_container">
            <div><a class="header_title" href="/">Leopold's Blog</a></div>
            <div class="appearance">
                <button class="switch" @click="handleDark">
                    <span class="check">
                        <span class="icon" style="display: block;">
                            <icon_sun v-show="!is_dark" />
                            <icon_moon v-show="is_dark" />
                        </span>
                    </span>
                </button>
                <button class="switch mobile_list_btn" type="button" @click="show_Slide">
                    <span class="btn_top"></span>
                    <span class="btn_middle"></span>
                    <span class="btn_bottom"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup> 
import {getCurrentInstance, ref, onMounted} from 'vue'

import icon_sun from './icons/sun.vue'
import icon_moon from './icons/moon.vue'

// data
const is_dark = ref(false)
const show_slide = ref(false)

// methods
const handleDark = () => {
    is_dark.value = !is_dark.value
    if(is_dark.value){
        document.documentElement.className = 'dark'
        localStorage.setItem('theme', 'dark')

    } else {
        document.documentElement.className = ''
        localStorage.setItem('theme', 'light')
    }
}

const instance = getCurrentInstance();
const emit = instance.emit;

const show_Slide = () => {
    emit('slide_switch')
}


onMounted(() => {
    if( localStorage.getItem('theme') ) {
        if( localStorage.getItem('theme') == 'dark' ) {
            is_dark.value = true
            document.documentElement.className = 'dark'
        } else {
            is_dark .value= false
            document.documentElement.className = ''
        }
    } else {
        localStorage.setItem('theme', 'light')
        is_dark = false
    }
    // window.addEventListener('scroll', this.handleScroll, true)
    // if(window.screen.availWidth > 767) document.body.addEventListener('touchstart',function(){})
    if(document.body.clientWidth > 767) document.body.addEventListener('touchstart',function(){})
})
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    padding: 1rem 9%;
    z-index: var(--header-z-index);
    background: var(--header-color);
    transition-property: opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    position: fixed;
    box-sizing: border-box;
}

.header_container {
    height: var(--header-heigth);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header_title {
    text-decoration: none;
    color: var(--theme-color);
    // color: var(--c-text);
    font-size: 1.2rem;
    font-weight: 700;
    &:hover, &:active {
        opacity: .6;
    }
}

.switch {
    border-radius: 0.5rem;
    border: 2px solid transparent;
    background-color: transparent;
    padding: 0.5rem;
    &:hover, &:active {
        // border-color: var(--c-text);
        border-color: var(--theme-color);
        cursor: pointer;
    }
}

.mobile_list_btn {
    display: none;
}


@media (max-width: 767px) {
    .header {
        // 移动模式下header常驻
        opacity: 1 !important;
    }
    .appearance {
        display: flex;
    }
    .mobile_list_btn {
        position: relative;
        display: block;
        width: 36px;
    
        span {
            position: absolute;
            width: 50%;
            height: 2px;
            left: 0;
            right: 0;
            margin: auto;
            background-color: var(--c-text);
        }
        .btn_top {
            top: 10px;
        }
        .btn_middle {
            top: 50%;
            margin-top: -1px;
        }
        .btn_bottom {
            bottom: 10px;
        }
    }
}
</style>
