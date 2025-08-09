import type { ThemeDefinition } from "vuetify";

export const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#3A6FF8',
        whiteBg: '#F8F8F8',
        white: '#F8F8F8',
        blue: '#083A50',
        blueMain: '#F8F8F8',
    },
}
export const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: '#3A6FF8',
        whiteBg: '#1A2029',
        white: '#F8F8F8',
        blue: '#ffffff',
        blueMain: '#14161D',
    }
}