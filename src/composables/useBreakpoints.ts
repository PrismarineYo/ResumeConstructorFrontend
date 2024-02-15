import variables from '@/assets/styles/variables/_variables.module.scss'
import type { BreakpointsObject } from '~/types/utils'

export const useBreakpoints = () => {
    const breakpoints = Object.keys(variables).reduce((acc, el) => {
        return {
            ...acc,
            [el]: parseFloat(variables[el])
        }
    }, {})

    return breakpoints as BreakpointsObject
}
