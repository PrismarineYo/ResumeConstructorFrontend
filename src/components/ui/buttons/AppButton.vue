<script setup lang="ts">
import type { AppButtonProps } from '~/components/ui/buttons/AppButton.types'
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<AppButtonProps>(), {
    size: 'm',
    color: 'brand',
    type: 'solid'
})
</script>

<template>
    <component
        :is="props.to ? NuxtLink : 'button'"
        :to="to"
        class="app-button d-i-flex items-center cursor-pointer"
        :class="[`app-button_size_${size}`, `app-button_color_${color}`, `app-button_type_${type}`]"
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
    --app-button-primary-color-1: var(--color-brand-500);
    --app-button-primary-color-2: var(--color-brand-600);
    --app-button-secondary-color-1: var(--color-primary-50);
    --app-button-secondary-color-2: var(--color-primary-50);

    transition-duration: var(--transition-default);
    font-size: var(--app-button-font-size);

    &:not(&_type_ghost) {
        padding-inline: calc(var(--app-button-border-radius) * 1.5);
        min-height: var(--app-button-size);
        border-radius: var(--app-button-border-radius);
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
            --app-button-primary-color-1: var(--color-brand-500);
            --app-button-primary-color-2: var(--color-brand-600);
            --app-button-secondary-color-1: var(--color-primary-50);
            --app-button-secondary-color-2: var(--color-primary-50);
        }

        &_primary {
            &-950 {
                --app-button-primary-color-1: var(--color-primary-950);
                --app-button-primary-color-2: var(--color-primary-900);
                --app-button-secondary-color-1: var(--color-primary-50);
                --app-button-secondary-color-2: var(--color-primary-50);
            }
        }
    }

    &_type {
        &_ghost {
            padding-inline: 0;
            color: var(--app-button-primary-color-1);
            background-color: transparent;
            transition-property: color;

            @media (hover: hover) {
                &:hover {
                    color: var(--app-button-primary-color-2);
                }
            }
        }

        &_solid {
            color: var(--app-button-secondary-color-1);
            background-color: var(--app-button-primary-color-1);
            transition-property: background-color;

            @media (hover: hover) {
                &:hover {
                    background-color: var(--app-button-primary-color-2);
                }
            }
        }
    }
}
</style>
