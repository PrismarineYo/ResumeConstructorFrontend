<script setup lang="ts"></script>

<template>
    <input class="app-input bg-base-primary-2 radius-default" />
</template>

<style lang="scss">
.app-input {
    outline: none;
    width: 100%;
    padding: 0 10px;
    height: var(--size-form-default);
    border: 1px solid var(--color-base-primary-3);
    transition: border var(--transition-default);

    &:hover {
        border-color: var(--color-accent-primary-1);
    }

    &:focus {
        border-color: var(--color-accent-primary-2);
    }
}
</style>
