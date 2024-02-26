<script setup lang="ts">
definePageMeta({
    layout: 'default'
})

useHead({
    title: 'Бесплатный Конструктор Резюме - ResumeMaster',
    meta: [
        {
            name: 'description',
            content:
                'Бесплатный конструктор резюме, который поможет создать профессиональное резюме всего за несколько минут.'
        },
        {
            name: 'keywords',
            content: 'конструктор резюме, бесплатный, профессиональное резюме'
        }
    ]
})
</script>

<template>
    <main class="page-home flex-col">
        <SectionIntro class="page-home__section" />
        <SectionAdvantages class="page-home__section" />
        <SectionFaq class="page-home__section" />
    </main>
</template>

<style lang="scss">
.page-home {
    &__section {
        margin-bottom: var(--gap-section-default);
    }
}
</style>
