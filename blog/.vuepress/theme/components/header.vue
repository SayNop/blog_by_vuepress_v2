<template>
    <header class="header">
        <div class="header_container">
            <div><a class="header_title" href="/">Leopold's Blog</a></div>
            <div class="appearance">
                <button class="switch" @click="handleDark">
                    <span class="check">
                        <span class="icon" style="display: block;">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="sun" v-show="is_dark">
                                <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z" />
                                <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z" />
                                <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z" />
                                <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z" />
                                <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z" />
                                <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z" />
                                <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                                <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z" />
                                <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="moon" v-show="!is_dark">
                                <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" />
                            </svg>
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
export default {
    name: 'navbar_wrapper',
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
        border-color: var(--theme-color);
    }
}

.mobile_list_btn {
    display: none;
}
</style>
