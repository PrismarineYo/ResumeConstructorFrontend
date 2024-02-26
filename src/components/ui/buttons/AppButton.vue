<script setup lang="ts">
import type { AppButtonProps } from '~/components/ui/buttons/AppButton.types'

withDefaults(defineProps<AppButtonProps>(), {
    size: 'default',
    color: 'accent-primary'
})
</script>

<template>
    <button
        class="app-button i-flex items-center clickable"
        :class="[`app-button_size_${size}`, `app-button_color_${color}`]"
    >
        <slot />
    </button>
</template>

<style lang="scss">
.app-button {
    --app-button-font-size: 0;
    --app-button-border-radius: 0;
    --app-button-border-size: 0;
    --app-button-bg-color: 0;
    --app-button-bg-color-hover: 0;

    border: none;
    font-size: var(--app-button-font-size);
    height: var(--app-button-border-size);
    border-radius: var(--app-button-border-radius);
    padding: 0 calc(var(--app-button-border-radius) * 1.5);
    color: var(--color-base-primary);
    transition: background-color var(--transition-default);

    background-color: var(--app-button-bg-color);

    &:hover {
        background-color: var(--app-button-bg-color-hover);
    }

    &:disabled {
        opacity: 0.65;
    }

    &_size {
        &_small {
            --app-button-font-size: 14px;
            --app-button-border-radius: var(--radius-small);
            --app-button-border-size: var(--size-form-small);
        }

        &_default {
            --app-button-font-size: 16px;
            --app-button-border-radius: var(--radius-default);
            --app-button-border-size: var(--size-form-default);
        }

        &_large {
            --app-button-font-size: 20px;
            --app-button-border-radius: var(--radius-large);
            --app-button-border-size: var(--size-form-large);
        }
    }

    &_color {
        &_accent-primary {
            --app-button-bg-color: var(--color-accent-primary-1);
            --app-button-bg-color-hover: var(--color-accent-primary-2);
        }

        &_error-primary {
            --app-button-bg-color: var(--color-error-primary-1);
            --app-button-bg-color-hover: var(--color-error-primary-2);
        }
    }
}
</style>
