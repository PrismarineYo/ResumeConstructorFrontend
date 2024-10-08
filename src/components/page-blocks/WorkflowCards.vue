<script setup lang="ts">
const cardList = [
    {
        title: 'Выберите шаблон',
        description: 'Подберите стиль из нашей коллекции профессиональных шаблонов.',
        icon: 'plus-frame'
    },
    {
        title: 'Заполните информацию',
        description: 'Легко введите свои данные, а наш умный помощник предложит улучшения.',
        icon: 'from-with-pen'
    },
    {
        title: 'Скачайте готовое резюме',
        description: 'Получите его в нужном формате без каких-либо затрат!',
        icon: 'download'
    }
]
</script>

<template>
    <section class="workflow-cards container-default d-flex flex-col items-center">
        <h2 class="workflow-cards__title text-center">Как это работает</h2>
        <p class="workflow-cards__description color-primary-600 text-center">
            Три простых шага, и ваше резюме готово — <span class="color-brand-500 fw-700">бесплатно</span>
        </p>

        <div class="workflow-cards__list d-flex justify-center flex-wrap">
            <div
                v-for="card in cardList"
                :key="card.title"
                class="workflow-cards__item d-flex flex-col justify-center text-center"
            >
                <div class="workflow-cards__item-cell d-flex justify-center items-center radius-m">
                    <AppIcon
                        class="workflow-cards__item-icon"
                        :icon="card.icon"
                    />
                </div>

                <p class="workflow-cards__item-title fw-700">{{ card.title }}</p>
                <p class="workflow-cards__item-description color-primary-600">{{ card.description }}</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.workflow-cards {
    padding-bottom: 60px;

    &__title {
        font-size: 36px;
        margin-bottom: 24px;
    }

    &__description {
        font-size: 18px;
        margin-bottom: 60px;
    }

    &__list {
        gap: 40px;
    }

    &__item {
        max-width: 370px;

        &-cell {
            width: 60px;
            height: 60px;
            padding: 4px;
            margin-inline: auto;
            margin-bottom: 30px;
            border: 1px solid var(--color-primary-200);
        }

        &-icon {
            width: 100%;
            height: 100%;
            background: -webkit-linear-gradient(315deg, var(--color-brand-400) 25%, var(--color-brand-700));
        }

        &-title {
            font-size: 22px;
            margin-bottom: 6px;
        }

        &-description {
        }
    }
}

@media screen and (max-width: 768px) {
    .workflow-cards {
        &__title {
            font-size: 26px;
        }

        &__description {
            font-size: 16px;
            margin-bottom: 50px;
        }
    }
}
</style>
