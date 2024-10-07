<script setup lang="ts">
useHead({
    title: 'Конструктор резюме бесплатно – Создайте профессиональное резюме онлайн за несколько минут',
    meta: [
        {
            name: 'description',
            content:
                'Создайте идеальное резюме с нашим бесплатным конструктором. Легко и быстро создайте профессиональное резюме, выбрав из стильных шаблонов. Попробуйте бесплатно!'
        },
        {
            name: 'keywords',
            content:
                'бесплатный конструктор резюме, создать резюме онлайн, профессиональное резюме, резюме шаблоны, создать резюме бесплатно, онлайн резюме конструктор, скачать резюме бесплатно'
        },
        {
            name: 'author',
            content: 'Конструктор резюме'
        },
        {
            property: 'og:title',
            content: 'Конструктор резюме бесплатно – Создайте профессиональное резюме за несколько минут'
        },
        {
            property: 'og:description',
            content:
                'Создайте свое идеальное резюме онлайн бесплатно. Простое создание, профессиональные шаблоны и быстрый результат. Начните карьеру с правильно составленного резюме!'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'twitter:title',
            content: 'Конструктор резюме бесплатно – Создайте резюме за несколько минут'
        },
        {
            property: 'twitter:description',
            content:
                'Создайте профессиональное резюме бесплатно с помощью нашего конструктора. Воспользуйтесь стильными шаблонами и сделайте резюме легко и быстро!'
        }
    ]
})
</script>

<template>
    <main class="home-page d-flex flex-col">
        <PrimaryHero />
        <!--        <StepСards />-->
        <VerticalCards />
        <ActionCard />
    </main>
</template>

<style scoped>
.home-page {
    gap: 100px;
    padding-bottom: 100px;
}

@media screen and (max-width: 768px) {
    .home-page {
        gap: 60px;
        padding-bottom: 60px;
    }
}
</style>
