<script setup lang="ts">
import type { AppIconProps } from '~/components/ui/utils/AppIcon.types'

withDefaults(defineProps<AppIconProps>(), {
    size: '20px',
    color: 'accent-primary'
})
</script>

<template>
    <span
        class="app-icon"
        aria-hidden="true"
        :style="{
            '--svg': `url('/images/icons/${icon}.svg')`,
            '--color': `var(--color-${color})`,
            '--rotate': `${rotate}deg`,
            '--size': size
        }"
    />
</template>

<style lang="scss">
.app-icon {
    display: inline-flex;
    background-color: var(--color);
    transition: transform var(--transition-default);

    transform: rotate(var(--rotate));

    width: var(--size);
    height: var(--size);

    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);

    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;

    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
}
</style>
