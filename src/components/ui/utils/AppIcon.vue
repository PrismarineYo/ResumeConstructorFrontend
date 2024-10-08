<script setup lang="ts">
import type { AppIconProps } from '~/components/ui/utils/AppIcon.types'

const props = defineProps<AppIconProps>()

const { app } = useRuntimeConfig()

const iconPath = computed(() => `url('${app.baseURL}icons/${props.icon}.svg')`)

const rotateProperty = computed(() => {
    return props.rotate ? `${props.rotate}deg` : undefined
})

const sizeProperty = computed(() => props.size || undefined)
</script>

<template>
    <span
        class="app-icon d-i-flex"
        aria-hidden="true"
        :style="{
            '--svg': iconPath,
            rotate: rotateProperty,
            width: sizeProperty,
            height: sizeProperty
        }"
    />
</template>

<style lang="scss">
.app-icon {
    background-color: currentColor;
    transition-property: background-color, rotate;
    transition-duration: var(--transition-default);
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
}
</style>
