<script setup lang="ts"></script>

<template>
    <section class="template-form radius-default flex flex-col">
        <div class="template-preview__controls flex items-center bg-base-primary-1">
            <AppButton
                class="template-preview__controls-download"
                size="small"
            >
                Скачать
            </AppButton>
        </div>

        <div class="template-form__content bg-base-primary-2">
            <div class="template-form__item radius-default bg-base-primary-1">
                <div class="template-form__item-header">
                    <span class="fw-700">Основаня информация</span>
                </div>

                <EditorFormMain />
            </div>

            <div class="template-form__item radius-default bg-base-primary-1">
                <div class="template-form__item-header">
                    <span class="fw-700">Основаня информация</span>
                </div>

                <EditorFormMain />
            </div>

            <div class="template-form__item radius-default bg-base-primary-1">
                <div class="template-form__item-header">
                    <span class="fw-700">Основаня информация</span>
                </div>

                <EditorFormMain />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.template-form {
    overflow: hidden;
    border: 1px solid var(--color-base-primary-3);
    position: relative;

    &__controls {
        position: sticky;
        top: 20px;
        width: 100%;
        height: 60px;
        padding: 8px 16px;
        border-bottom: 1px solid var(--color-base-primary-3);

        &-download {
            //margin-left: 50px;
        }
    }

    &__content {
        flex: 1;
        padding: 16px;

        &-section {
            padding: 16px;
        }
    }

    &__item {
        padding: 16px;
        border: 1px solid var(--color-base-primary-3);

        &:not(:last-child) {
            margin-bottom: 24px;
        }

        &-header {
            margin-bottom: 24px;
            padding-bottom: 12px;
            font-size: 20px;
            border-bottom: 1px solid var(--color-base-primary-3);
        }
    }
}
</style>
