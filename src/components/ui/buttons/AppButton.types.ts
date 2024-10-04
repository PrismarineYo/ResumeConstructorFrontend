import type { RouteLocationRaw } from '#vue-router'

export interface AppButtonProps {
    to?: RouteLocationRaw
    title?: string
    type?: 'solid' | 'ghost'
    color?: 'brand' | 'primary-950' | 'error-primary'
    size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}
