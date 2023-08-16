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

<script> 
import icon_sun from '../components/icons/sun.vue'
import icon_moon from '../components/icons/moon.vue'

export default {
    name: 'navbar_wrapper',
    components: {
        icon_sun,
        icon_moon,
    },
    data() {
        return {
            is_dark: false,
            show_slide: false,
        }
    }, 
    methods: {
        handleDark(){
            this.is_dark = !this.is_dark
            if(this.is_dark){
                document.documentElement.className = 'dark'
                localStorage.setItem('theme', 'dark')

            } else {
                document.documentElement.className = ''
                localStorage.setItem('theme', 'light')
            }
        },
        show_Slide(){
            this.$emit('slide_switch')
        }
    },
    mounted() {
        if( localStorage.getItem('theme') ) {
            if( localStorage.getItem('theme') == 'dark' ) {
                this.is_dark=true
                document.documentElement.className = 'dark'
            } else {
                this.is_dark=false
                document.documentElement.className = ''
            }
        } else {
            localStorage.setItem('theme', 'light')
            this.is_dark = false
        }
        // window.addEventListener('scroll', this.handleScroll, true)
        // if(window.screen.availWidth > 767) document.body.addEventListener('touchstart',function(){})
        if(document.body.clientWidth > 767) document.body.addEventListener('touchstart',function(){})
    }
}
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
