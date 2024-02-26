<script setup lang="ts"></script>

<template>
    <form class="editor-form-name flex flex-col">
        <div class="editor-form-name__section grid grid-col-2">
            <label class="editor-form-name__field flex flex-col justify-end">
                Имя
                <AppInput placeholder="123" />
            </label>
            <label class="editor-form-name__field flex flex-col justify-end">
                Фамилия
                <AppInput />
            </label>
        </div>

        <div class="editor-form-name__section grid grid-col-2">
            <label class="editor-form-name__field flex flex-col justify-end">
                Город проживания
                <AppInput />
            </label>
            <label class="editor-form-name__field flex flex-col justify-end">
                Должность
                <AppInput />
            </label>
        </div>

        <p class="editor-form-name__title">Дата рождения</p>

        <div class="editor-form-name__section grid grid-col-3">
            <label class="editor-form-name__field flex flex-col">
                День
                <AppInput maxlength="2" />
            </label>
            <label class="editor-form-name__field flex flex-col justify-end">
                Месяц
                <AppInput />
            </label>
            <label class="editor-form-name__field flex flex-col justify-end">
                Год
                <AppInput maxlength="4" />
            </label>
        </div>
    </form>
</template>

<style lang="scss">
.editor-form-name {
    &__section {
        gap: 16px;

        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }

    &__field {
        gap: 8px;
    }

    &__title {
        font-size: 18px;
        margin-bottom: 16px;
    }
}
</style>
