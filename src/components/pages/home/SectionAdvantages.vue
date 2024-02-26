<script setup lang="ts"></script>

<template>
    <section class="section-advantages container-default">
        <h2 class="section-advantages__title title text-center">{{ $t('pages.home.sections.advantages.title') }}</h2>

        <p class="section-advantages__description text-center">
            {{ $t('pages.home.sections.advantages.description') }}
        </p>

        <div class="section-advantages__content grid">
            <div
                v-for="({ title, description }, key) in $tm('pages.home.sections.advantages.content')"
                :key="key"
                class="section-advantages__item radius-default flex flex-col"
            >
                <img
                    class="section-advantages__item-icon radius-small"
                    src="https://m2lab.ru/icon/people-folder.svg"
                />

                <span class="section-advantages__item-title fw-700">{{ $rt(title) }}</span>

                <p class="section-advantages__item-description">
                    {{ $rt(description) }}
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.section-advantages {
    &__title {
        margin-bottom: 26px;
    }

    &__description {
        font-size: 20px;
        margin-bottom: 36px;
    }

    &__content {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }

    &__item {
        padding: 20px;
        background-color: var(--color-base-tertiary);
        background-image: linear-gradient(var(--color-base-secondary) 0%, var(--color-base-tertiary) 100%);
        border: 1px solid var(--color-accent-primary-1);
        transition: transform var(--transition-default);

        &:hover {
            transform: translateY(-10px);
        }

        &-icon {
            width: 54px;
            aspect-ratio: 1 / 1;
            object-position: center;
            margin-bottom: 20px;
        }

        &-title {
            font-size: 20px;
            margin-bottom: 16px;
        }
    }
}
</style>
