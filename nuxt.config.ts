// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: 'src/',
    components: [
        {
            path: '~/components',
            pathPrefix: false,
            extensions: ['.vue']
        }
    ],
    app: {
        rootId: 'future-name',
        head: {
            htmlAttrs: {
                class: 'scrollable'
            },
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { name: 'theme-color', content: '#ffffff' }
            ]
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

    routeRules: {
        '/': { prerender: true },
        '/edit': { ssr: false },
        '/templates': { ssr: false }
    },
    vite: {
        esbuild: {
            drop: ['console', 'debugger']
        }
    },
    compatibilityDate: '2024-10-03',
    modules: ['@vueuse/nuxt', '@nuxtjs/i18n', 'yandex-metrika-module-nuxt3'],
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
    yandexMetrika: {
        id: process.env.YANDEX_METRIKA_ID,
        webvisor: true
    }
})
