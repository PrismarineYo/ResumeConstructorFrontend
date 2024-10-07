<script setup lang="ts">
const pageList = [
    {
        title: 'Главная',
        path: '/'
    },
    {
        title: 'Шаблоны',
        path: '/templates'
    },
    {
        title: 'Создать резюме',
        path: '/editor'
    }
]
</script>

<template>
    <footer class="app-footer d-flex justify-between items-center container-default">
        <div
            class="app-footer__pages d-flex flex-wrap justify-center"
            itemscope
            itemtype="http://schema.org/SiteNavigationElement"
            role="navigation"
        >
            <NuxtLink
                v-for="page in pageList"
                :key="page.path"
                :to="page.path"
                class="app-footer__link color-primary-500"
            >
                {{ page.title }}
            </NuxtLink>
        </div>

        <p class="app-footer__name color-brand-500 fw-700">PerfectResume</p>
    </footer>
</template>

<style lang="scss">
.app-footer {
    padding-block: 30px;
    gap: 26px;
    border-top: 1px solid var(--color-primary-200);

    &__pages {
        gap: 40px;
    }

    &__link {
        transition: color var(--transition-default);

        @media (hover: hover) {
            &:hover {
                color: var(--color-primary-950);
            }
        }
    }

    &__name {
        font-size: 20px;
    }
}

@media screen and (max-width: 768px) {
    .app-footer {
        flex-direction: column-reverse;

        &__pages {
            gap: 10px 14px;
        }
    }
}
</style>
