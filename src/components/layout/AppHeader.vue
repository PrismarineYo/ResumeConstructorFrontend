<script setup lang="ts">
import { useTemplateRef } from 'vue'

const pageList = [
    {
        title: 'Главная',
        path: '/'
    },
    {
        title: 'Шаблоны',
        path: '/templates'
    }
]

const isOpen = shallowRef(false)

const navigationNode = useTemplateRef<HTMLElement>('navigation')
const activatorNode = useTemplateRef<HTMLElement>('activator')

onClickOutside(
    navigationNode,
    () => {
        isOpen.value = false
    },
    { ignore: [activatorNode] }
)
</script>

<template>
    <header
        class="app-header d-flex justify-center"
        itemscope="itemscope"
        itemtype="http://schema.org/WPHeader"
    >
        <div class="app-header__body d-flex items-center justify-between">
            <NuxtLink
                title="Вернуться на главную"
                aria-label="Вернуться на главую"
                class="app-header__name color-brand-500 fw-700"
                to="/"
            >
                PerfectResume
            </NuxtLink>

            <nav
                ref="navigation"
                class="app-header__navigation d-flex items-center"
                :class="`app-header__navigation_${isOpen ? 'opened' : 'hidden'}`"
            >
                <NuxtLink
                    v-for="page in pageList"
                    :key="page.path"
                    :to="page.path"
                    class="app-header__link color-primary-500"
                >
                    {{ page.title }}
                </NuxtLink>

                <AppButton
                    class="app-header__editor"
                    color="primary-950"
                    size="l"
                    to="/editor"
                    title="Создать резюме"
                />
            </nav>

            <AppButton
                ref="activator"
                class="app-header__menu"
                type="ghost"
                color="primary-950"
                :title="isOpen ? 'Закрыть меню' : 'Открыть меню'"
                @click="isOpen = !isOpen"
            >
                <AppIcon
                    :icon="isOpen ? 'cross' : 'menu'"
                    size="30px"
                />
            </AppButton>
        </div>
    </header>
</template>

<style lang="scss">
.app-header {
    position: relative;
    padding-inline: 20px;
    height: var(--size-header);
    border-bottom: 1px solid var(--color-primary-100);
    backdrop-filter: saturate(180%) blur(5px);
    background: var(--color-primary-50-75);

    &__body {
        width: 1400px;
    }

    &__name {
        font-size: 20px;
        margin-right: auto;
    }

    &__navigation {
        height: fit-content;
        gap: 30px;
    }

    &__link {
        transition: color var(--transition-default);

        @media (hover: hover) {
            &:hover {
                color: var(--color-primary-950);
            }
        }
    }

    &__editor {
        font-size: 16px;
    }

    &__menu {
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .app-header {
        &__navigation {
            position: absolute;
            top: 100%;
            left: 100%;
            width: 100%;
            padding: 20px;
            background-color: var(--color-primary-50);
            border-bottom: 1px solid var(--color-primary-100);
            flex-direction: column;
            transform: translate(0, 1px);
            transition: transform var(--transition-slow);

            &_opened {
                transform: translate(-100%, 1px);
            }
        }

        &__menu {
            display: inline-flex;
        }
    }
}
</style>
