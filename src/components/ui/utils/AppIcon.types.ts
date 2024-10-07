export type AppIconType = 'arrow' | 'menu' | 'cross' | 'download' | 'from-with-pen' | 'plus-frame' | 'resume'

export interface AppIconProps {
    icon: AppIconType
    color?: string
    size?: string
    rotate?: string | number
}
