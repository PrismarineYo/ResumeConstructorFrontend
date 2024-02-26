<script setup lang="ts">
definePageMeta({
    layout: 'clear'
})

const template = `<div class="template">
        <div class="template__aside">
            <div class="template__aside-body">
                <div class="template__aside-header">
                    <span>Контакты</span>
                </div>
                <div class="template__aside-main">
                    <span>{{ form.contacts.mail }}</span>
                </div>
            </div>
            <div class="template__aside-body">
                <div class="template__aside-header">
                    <span>Контакты</span>
                </div>
                <div class="template__aside-main">
                    form.contacts.mail
                </div>
            </div>
        </div>
    </div>`

const form = reactive({
    contacts: {
        mail: ''
    }
})
</script>

<template>
    <main class="page-editor flex items-start justify-center">
        <input v-model="form.contacts.mail" />

        {{ form.contacts.mail }}

        <TemplateForm class="page-editor__template-form" />
        <TemplatePreview
            class="page-editor__template-preview"
            :template="template"
            :data="form"
        />
    </main>
</template>

<style lang="scss">
.page-editor {
    padding: 40px;
    gap: 40px;

    &__template-form {
        width: 587px;
    }

    &__template-preview {
        position: sticky;
        top: 40px;
        width: 587px;
        height: calc(100vh - 80px);
    }
}
</style>
