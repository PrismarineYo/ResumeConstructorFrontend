export type AppIconType = 'arrow' | 'menu' | 'cross'

export interface AppIconProps {
    icon: AppIconType
    color?: string
    size?: string
    rotate?: string | number
}
