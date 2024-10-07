<script setup lang="ts">
const cardList = [
    {
        title: 'Профессиональные шаблоны для любых профессий',
        description:
            'В нашем конструкторе вы найдете широкую коллекцию шаблонов, которые идеально подходят для разных сфер деятельности — от ИТ и маркетинга до финансов и креативных индустрий. Все шаблоны тщательно разработаны, чтобы подчеркнуть ваши сильные стороны и соответствовать современным стандартам.'
    },
    {
        title: 'Легкий и интуитивно понятный интерфейс',
        description:
            'Наш конструктор создан для того, чтобы каждый мог легко и быстро создать резюме. Вам не нужны навыки дизайна или программирования — просто введите информацию в готовые поля, и система все сделает за вас. Даже если вы никогда не создавали резюме раньше, с нашим конструктором это займет всего несколько минут.'
    },
    {
        title: 'Подсказки и советы для улучшения',
        description:
            'Мы понимаем, как важно, чтобы резюме было не только красивым, но и содержательным. Наш умный помощник анализирует введенные данные и предлагает рекомендации, чтобы ваше резюме было максимально эффективным. Все это — абсолютно бесплатно!'
    },
    {
        title: 'Экономия времени и средств',
        description:
            'Забудьте о долгих поисках примеров и шаблонов резюме в интернете. С нами вам не нужно тратить деньги на платные сервисы или обращаться к профессиональным дизайнерам. Вы получаете доступ ко всем функциям и шаблонам бесплатно, экономя свое время и деньги.'
    },
    {
        title: 'Полная персонализация под ваши нужды',
        description:
            'Каждый кандидат уникален, и ваше резюме должно это отражать. Вы можете легко редактировать и настраивать каждую деталь — от шрифта и цвета до структуры разделов, чтобы ваше резюме идеально соответствовало вашим карьерным целям. И, конечно, вы делаете это без каких-либо затрат!'
    }
]
</script>

<template>
    <section class="vertical-cards container-default d-flex justify-between items-start">
        <h2 class="vertical-cards__title">Почему выбирают нас</h2>

        <div class="vertical-cards__list d-flex flex-col">
            <div
                v-for="step in cardList"
                :key="step.title"
                class="vertical-cards__item radius-xl flex"
            >
                <div class="vertical-cards__item-body radius-m">
                    <p class="vertical-cards__item-title fw-700">{{ step.title }}</p>
                    <p class="vertical-cards__item-description color-primary-600">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.vertical-cards {
    position: relative;
    gap: 40px;

    &__title {
        font-size: 36px;
        position: sticky;
        top: 120px;
    }

    &__list {
        max-width: 540px;
        gap: 30px;
    }

    &__item {
        padding: 4px;
        border: 1px solid var(--color-primary-200);

        &-body {
            padding: 16px;
            background: linear-gradient(transparent 40%, var(--color-primary-100));
        }

        &-title {
            font-size: 22px;
            margin-bottom: 12px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .vertical-cards {
        flex-direction: column;
        align-items: center;

        &__title {
            position: static;
        }
    }
}

@media screen and (max-width: 768px) {
    .vertical-cards {
        gap: 30px;

        &__title {
            font-size: 26px;
        }

        &__list {
            gap: 20px;
        }
    }
}
</style>
