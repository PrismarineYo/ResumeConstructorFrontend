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
        rootId: 'future-name'
    },
    css: [],

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
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: `@use "@/assets/styles/abstracts/_variables.scss" as *; @use "@/assets/styles/abstracts/_mixins.scss" as *;`
                }
            }
        },
        esbuild: {
            drop: ['console', 'debugger']
        }
    },
    compatibilityDate: '2024-10-03'
})
