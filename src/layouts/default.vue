<script setup lang="ts"></script>

<template>
    <div class="layout-default">
        <AppHeader class="layout-default__header" />

        <NuxtPage />

        <AppFooter />
    </div>
</template>

<style lang="scss">
.layout-default {
    &__header {
        position: fixed;
        inset: 0;
        z-index: 100;
    }
}
</style>
