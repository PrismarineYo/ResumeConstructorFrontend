<script setup lang="ts">
const wordList = ['быстро', 'бесплатно', 'легко']

const wordIndex = shallowRef(0)

onMounted(() => {
    setInterval(() => {
        if (wordIndex.value + 1 < wordList.length) {
            wordIndex.value++
        } else {
            wordIndex.value = 0
        }
    }, 3000)
})
</script>

<template>
    <section class="primary-hero container-default d-flex flex-col justify-center items-center text-center">
        <h1 class="primary-hero__title">
            <span>Создайте идеальное резюме</span>
            <br />
            <transition
                name="hero-bounce"
                mode="out-in"
            >
                <span
                    :key="wordIndex"
                    class="primary-hero__word"
                >
                    {{ wordList[wordIndex] }}!
                </span>
            </transition>
        </h1>

        <p class="primary-hero__description color-primary-600">
            Наш конструктор резюме <span class="primary-hero__marker fw-700 color-brand-500">поможет</span> создать
            резюме, которое <span class="primary-hero__marker fw-700 color-brand-500">выделит вас</span> среди других
            кандидатов.
        </p>
    </section>
</template>

<style lang="scss">
.hero-bounce-enter-active,
.hero-bounce-leave-active {
    transition-property: transform, filter, opacity;
    transition: 0.5s ease;
}

.hero-bounce-enter-from,
.hero-bounce-leave-to {
    opacity: 0;
    filter: blur(2px);
}

.hero-bounce-enter-from {
    transform: translateX(-100px);
}

.hero-bounce-leave-to {
    transform: translateX(100px);
}

.primary-hero {
    position: relative;
    min-height: 600px;
    overflow-x: hidden;
    padding-block: 200px;
    background-size: 20px 20px;
    background-image: linear-gradient(to right, var(--color-primary-100) 1px, transparent 1px),
        linear-gradient(to bottom, var(--color-primary-100) 1px, transparent 1px);
    mask-image: linear-gradient(to top, transparent, black 200px);
    mask-size: 100% 100%;

    &__title {
        font-size: 50px;
        margin-bottom: 60px;
    }

    &__word {
        display: block;
        text-transform: uppercase;
        background: -webkit-linear-gradient(90deg, var(--color-brand-400), var(--color-brand-700));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &__description {
        font-size: 18px;
        max-width: 80%;
    }

    &__marker {
        white-space: nowrap;
    }
}

@media screen and (max-width: 768px) {
    .primary-hero {
        &__title {
            font-size: 30px;
            margin-bottom: 50px;
        }

        &__description {
            font-size: 16px;
            max-width: 100%;
        }
    }
}
</style>
