<script setup lang="ts"></script>

<template>
    <section class="action-card container-default">
        <div class="action-card__item radius-xl d-flex justify-between color-primary-50">
            <AppIcon
                class="action-card__icon"
                icon="resume"
            />
            <div class="action-card__info d-flex flex-col">
                <h2 class="action-card__title">Начните бесплатно прямо сейчас</h2>
                <p class="action-card__description">
                    Нажмите кнопку ниже, чтобы бесплатно начать создание резюме и сделать первый шаг к успешной карьере.
                    Ваше будущее — без дополнительных расходов!
                </p>

                <AppButton
                    class="action-card__button"
                    to="/editor"
                    color="primary-950"
                    size="xl"
                    title="Создать резюме"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.action-card {
    &__item {
        gap: 30px;
        padding: 30px;
        background: linear-gradient(
            145deg,
            var(--color-brand-600),
            var(--color-brand-500) 40%,
            var(--color-brand-400),
            var(--color-brand-600)
        );
    }

    &__icon {
        width: 150px;
        height: 150px;
    }

    &__info {
        flex: 1;
        gap: 20px;
    }

    &__title {
        font-size: 36px;
    }

    &__description {
        font-size: 18px;
    }

    &__button {
        max-width: 300px;
    }
}

@media screen and (max-width: 768px) {
    .action-card {
        &__item {
            gap: 30px;
            padding: 20px;
            flex-flow: column;
            align-items: center;
        }

        &__title {
            font-size: 28px;
        }

        &__description {
            font-size: 16px;
        }

        &__info {
            align-items: center;
            text-align: center;
        }
    }
}
</style>
