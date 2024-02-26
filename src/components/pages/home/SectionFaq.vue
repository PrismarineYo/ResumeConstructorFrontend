<script setup lang="ts">
const schemaAttrs = {
    itemscope: '',
    itemprop: 'mainEntity',
    itemtype: 'https://schema.org/Question',
    titleAttrs: { itemprop: 'name' },
    contentAttrs: { itemscope: '', itemprop: 'acceptedAnswer', itemtype: 'https://schema.org/Answer' },
    contentBodyAttrs: { itemprop: 'text' }
}
</script>

<template>
    <section
        class="section-faq container-default"
        itemscope
        itemtype="https://schema.org/FAQPage"
    >
        <h2 class="section-faq__title text-center title">{{ $t('pages.home.sections.faq.title') }}</h2>

        <div class="section-faq__content flex flex-col">
            <AppDetails
                v-for="({ question, answer }, key) in $tm('pages.home.sections.faq.content') as any[]"
                :key="key"
                :title="$rt(question)"
                :content="$rt(answer)"
                v-bind="schemaAttrs"
            />
        </div>
    </section>
</template>

<style lang="scss">
.section-faq {
    &__title {
        margin-bottom: 30px;
    }

    &__content {
        gap: 16px;
    }
}

@media screen and (max-width: 576px) {
    .section-faq {
        &__title {
            margin-bottom: 24px;
        }
    }
}
</style>
