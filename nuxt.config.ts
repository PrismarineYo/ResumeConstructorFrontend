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
    css: ['primevue/resources/themes/aura-light-green/theme.css'],
    modules: ['@vueuse/nuxt', '@nuxtjs/i18n', 'nuxt-primevue'],
    primevue: {
        components: {
            prefix: 'Ui'
        }
    },
    i18n: {
        langDir: 'locales',
        types: 'composition',
        lazy: true,
        locales: [{ code: 'ru', iso: 'ru', file: 'ru.json' }],
        defaultLocale: 'ru',
        fallbackLocale: 'ru',
        compilation: {
            strictMessage: false
        },
        bundle: {
            runtimeOnly: true,
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
    }
})
