<template>
    <svg class="pull_down" viewBox="0 0 1026 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M857.088 224.256q28.672-28.672 69.12-28.672t69.12 28.672q29.696 28.672 29.696 68.608t-29.696 68.608l-382.976 380.928q-12.288 14.336-30.72 19.968t-38.912 4.608-40.448-8.704-34.304-22.016l-376.832-374.784q-29.696-28.672-29.696-68.608t29.696-68.608q14.336-14.336 32.256-21.504t36.864-7.168 37.376 7.168 32.768 21.504l313.344 309.248z" />
    </svg>
</template>

<style scoped lang="scss">
.pull_down {
    width: 2rem;
    height: 2rem;
    position: absolute;
    display: block;
    left: 50%;
    margin-left: -1rem;
    bottom: 1rem;
    // fill: var(--c-text);
    fill: var(--c-bg);
    animation: animation_icon .8s cubic-bezier(.445, .05, .55, .95) .2s infinite alternate;
    // -webkit-animation: animation_icon .8s cubic-bezier(.445, .05, .55, .95) .2s infinite alternate;
}

@keyframes animation_icon {
    0% {
        opacity: 0;
        transform: translateY(-30%);
        // -webkit-transform: translateY(-30%);
    }
    100% {
        opacity: 1;
        transform: none;
        // -webkit-transform: none;
    }
}
</style>
