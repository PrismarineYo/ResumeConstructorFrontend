<script setup lang="ts">
import type { TemplatePreviewProps } from '~/components/pages/editor/TemplatePreview.types'

const props = defineProps<TemplatePreviewProps>()

const templateTarget = shallowRef()

watch(
    () => props.data,
    () => {
        console.log(1)
        templateTarget.value.contentWindow.postMessage(JSON.stringify({ data: props.data }))
    },
    { deep: true }
)

onMounted(() => {
    templateTarget.value.contentWindow.postMessage({ template: props.template })
})
</script>

<template>
    <section class="template-preview radius-default flex flex-col">
        <div class="template-preview__controls flex items-center">
            <AppButton
                class="template-preview__controls-download"
                size="small"
            >
                Скачать
            </AppButton>
        </div>

        <div class="template-preview__content flex justify-center">
            <iframe
                ref="templateTarget"
                src="/template.html"
                height="100%"
                width="100%"
                frameborder="none"
            />
        </div>
    </section>
</template>

<style lang="scss">
.template-preview {
    overflow: hidden;
    border: 1px solid var(--color-base-primary-3);

    &__controls {
        width: 100%;
        height: 60px;
        padding: 8px 16px;
        background-color: var(--color-base-primary-1);
        border-bottom: 1px solid var(--color-base-primary-3);

        &-download {
            //margin-left: 50px;
        }
    }

    &__content {
        flex: 1;
        background: var(--color-base-primary-2);
        padding: 16px;
    }
}
</style>
