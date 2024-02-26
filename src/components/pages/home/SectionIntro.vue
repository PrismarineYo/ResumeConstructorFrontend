<script setup lang="ts"></script>

<template>
    <section class="section-intro container-default flex flex-col items-center justify-center">
        <div class="section-intro__content flex flex-col items-center">
            <h1 class="section-intro__title text-center">
                Сделайте <span class="text-accent-primary-1">профессиональное</span> резюме <br />
                по готовым шаблонам!
            </h1>

            <span class="section-intro__description text-center">
                У нас есть идеальный шаблон, который можно легко настроить под ваши требования.<br />
                Начните прямо сейчас и создайте резюме, которое выделит вас среди других соискателей!
            </span>

            <AppButton size="large"> Создать Резюме</AppButton>
        </div>

        <!--        <div class="section-intro__fade" />-->
    </section>
</template>

<style lang="scss">
.section-intro {
    height: 80vh;
    overflow: hidden;
    position: relative;
    background-color: var(--color-base-primary);

    &__content {
        position: relative;
        z-index: 1;
    }

    &__title {
        font-size: 46px;
        margin-bottom: 26px;
    }

    &__description {
        font-size: 18px;
        margin-bottom: 24px;
        color: var(--color-text-base-secondary);
    }

    &__bg {
        position: absolute;
        opacity: 0.75;
        width: 100%;
        height: 100%;
        gap: 60px;

        &-section {
            width: 100%;

            &_first {
                width: 100%;
                animation: marquee 20s linear infinite;
            }

            @keyframes marquee {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-100%);
                }
            }
        }
    }

    &__template {
        width: 156px;
        aspect-ratio: 1 / 1.414;
        transition: transform var(--transition-default);
        background-color: var(--color-base-secondary);
        overflow: hidden;

        &:hover {
            transform: scale(1.2);
        }

        &-aside {
            width: 25%;
            height: 100%;
            background: var(--color-base-tertiary);
        }

        &-body {
            flex: 1;
            padding: 8px;
            gap: 4px;
        }

        &-line {
            height: 8px;
            width: 100%;
            background: var(--color-base-tertiary);
            border-radius: 4px;
        }
    }

    &__fade {
        width: 100%;
        height: 10vh;
        position: absolute;
        bottom: 0;
        background: linear-gradient(0deg, var(--color-base-primary), transparent);
    }
}
</style>
