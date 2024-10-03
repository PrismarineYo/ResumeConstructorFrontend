// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: 'src/',
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    app: {
        rootId: 'future-name',
        head: {
            htmlAttrs: {
                class: 'scrollable'
            }
        }
    },
    css: ['@/assets/styles/main.scss'],
    experimental: {
        defaults: {
            nuxtLink: {
                prefetch: false
            }
        }
    },
    modules: ['@vueuse/nuxt', '@nuxtjs/i18n'],
    i18n: {
        langDir: 'locales',
        types: 'composition',
        lazy: true,
        locales: [{ code: 'ru', language: 'ru', file: 'ru.json' }],
        defaultLocale: 'ru',
        compilation: {
            strictMessage: false
        },
        bundle: {
            fullInstall: false
        },
        detectBrowserLanguage: false
    },
    imports: {
        dirs: ['stores', 'data']
    },
    routeRules: {
        '/': { prerender: true, ssr: false },
        '/edit': { ssr: false }
    },
    vite: {
        esbuild: {
            drop: ['console', 'debugger']
        }
    },
    compatibilityDate: '2024-10-03'
})
