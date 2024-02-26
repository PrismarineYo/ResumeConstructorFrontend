<script setup lang="ts">
import type { AppDetailsProps } from '~/components/ui/panels/AppDetails.types'

const props = defineProps<AppDetailsProps>()

const isExpanded = shallowRef(false)

const contentTarget = shallowRef()
const contentHeight = shallowRef('0px')

const toggleContentVisibility = () => {
    isExpanded.value = !isExpanded.value

    window.requestAnimationFrame(animateContentBlock)
}

const animateContentBlock = () => {
    if (isExpanded.value) {
        contentHeight.value = contentTarget.value.getBoundingClientRect().height + 'px'
    } else {
        contentHeight.value = '0px'
    }
}

const content = computed(() => (typeof props.content === 'string' ? [props.content] : props.content))
</script>

<template>
    <div class="app-details radius-default">
        <button
            class="app-details__activator clickable i-flex items-center justify-between"
            @click="toggleContentVisibility"
        >
            <span
                class="app-details__activator-title fw-700 text-left"
                v-bind="titleAttrs"
            >
                {{ title }}
            </span>

            <AppIcon
                icon="arrow"
                :rotate="isExpanded ? 0 : 180"
            />
        </button>

        <div
            class="app-details__content"
            :style="{ height: contentHeight }"
            v-bind="contentAttrs"
            :class="{
                'app-details__content_visible': isExpanded
            }"
        >
            <div
                v-bind="contentBodyAttrs"
                ref="contentTarget"
                class="app-details__content-body"
            >
                <p
                    v-for="(item, key) in content"
                    :key="key"
                    class="app-details__content-item"
                >
                    {{ item }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.app-details {
    border: 1px solid var(--color-base-primary-3);
    overflow: hidden;

    &__activator {
        gap: 20px;
        width: 100%;
        padding: 20px 24px;
        border: none;
        background-color: var(--color-base-primary-2);

        &-title {
            flex: 1;
            font-size: 20px;
        }
    }

    &__content {
        overflow: hidden;
        transition: height var(--transition-default);

        &_visible {
            transition-delay: var(--transition-fast);
        }

        &-body {
            padding: 24px;
            border-top: 1px solid var(--color-base-primary-3);
            background-color: var(--color-base-primary-1);
        }

        &-item {
            line-height: 1.5;

            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }
    }
}

@media screen and (max-width: 576px) {
    .app-details {
        &__activator {
            gap: 16px;
            padding: 14px 16px;

            &-title {
                font-size: 16px;
            }
        }

        &__content {
            &-body {
                padding: 16px;
            }

            &-item {
                &:not(:last-child) {
                    margin-bottom: 12px;
                }
            }
        }
    }
}
</style>
