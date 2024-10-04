<script setup lang="ts">
import type { AppButtonProps } from '~/components/ui/buttons/AppButton.types'
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<AppButtonProps>(), {
    size: 'm',
    color: 'brand'
})
</script>

<template>
    <component
        :is="props.to ? NuxtLink : 'button'"
        :to="to"
        class="app-button d-i-flex items-center clickable"
        :class="[`app-button_size_${size}`, `app-button_color_${color}`]"
        :title="title"
        :aria-label="title"
    >
        <slot>
            {{ title }}
        </slot>
    </component>
</template>

<style lang="scss">
.app-button {
    --app-button-font-size: 16px;
    --app-button-border-radius: var(--radius-m);
    --app-button-size: var(--size-form-m);
    --app-button-bg-color: var(--color-brand-500);
    --app-button-bg-color-hover: var(--color-brand-600);
    --app-button-color: var(--color-primary-50);

    font-size: var(--app-button-font-size);
    min-height: var(--app-button-size);
    border-radius: var(--app-button-border-radius);
    padding-inline: calc(var(--app-button-border-radius) * 1.5);
    color: var(--app-button-color);
    transition: background-color var(--transition-default);

    background-color: var(--app-button-bg-color);

    &:hover {
        background-color: var(--app-button-bg-color-hover);
    }

    &:disabled {
        opacity: 0.65;
    }

    &_size {
        &_xs {
            --app-button-font-size: 14px;
            --app-button-border-radius: var(--radius-xs);
            --app-button-size: var(--size-form-xs);
        }

        &_s {
            --app-button-font-size: 15px;
            --app-button-border-radius: var(--radius-s);
            --app-button-size: var(--size-form-s);
        }

        &_m {
            --app-button-font-size: 16px;
            --app-button-border-radius: var(--radius-s);
            --app-button-size: var(--size-form-m);
        }

        &_l {
            --app-button-font-size: 17px;
            --app-button-border-radius: var(--radius-m);
            --app-button-size: var(--size-form-l);
        }

        &_xl {
            --app-button-font-size: 18px;
            --app-button-border-radius: var(--radius-l);
            --app-button-size: var(--size-form-xl);
        }
    }

    &_color {
        &_brand {
            --app-button-color: var(--color-primary-50);
            --app-button-bg-color: var(--color-brand-500);
            --app-button-bg-color-hover: var(--color-brand-600);
        }

        &_primary {
            &-950 {
                --app-button-color: var(--color-primary-50);
                --app-button-bg-color: var(--color-primary-950);
                --app-button-bg-color-hover: var(--color-primary-900);
            }
        }
    }
}
</style>
