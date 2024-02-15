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
    css: ['@/assets/styles/main.scss'],
    modules: ['@vueuse/nuxt', '@nuxtjs/i18n'],

    i18n: {
        langDir: 'locales',
        types: 'composition',
        lazy: true,
        locales: [{ code: 'ru', iso: 'ru', file: 'ru.json' }],
        defaultLocale: 'ru',
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
                    additionalData: `@use "@/assets/styles/variables/_variables.scss" as *;`
                }
            }
        },
        esbuild: {
            drop: ['console', 'debugger']
        }
    }
})
