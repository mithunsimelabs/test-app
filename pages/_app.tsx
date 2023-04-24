import type { AppProps } from 'next/app'
import '@styles/base.css'
import { ThemeProvider } from '@mui/material/styles'
import { createAppTheme } from '@mui-theme'
import tinycolor from 'tinycolor2'
type ThemeConfig = {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
}
type MyAppProps = AppProps & {
  appTheme: ThemeConfig
}

declare module '@mui/material/styles' {
  interface Palette {
    bgColor: {
      main: string
    }
  }
  interface PaletteOptions {
    bgColor?: {
      main?: string
    }
  }
}

function MyApp({ Component, pageProps, appTheme }: any) {
  return (
    <ThemeProvider theme={createAppTheme(appTheme)}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async () => {
  let primary = '#006DD1'
  let secondary = '#16BC08'
  let mainTextColor = '#1A242A'
  let bgColor = '#FFFFFF'
  let border = '#DDE5EA'
  let appTheme = {
    palette: {
      primary: {
        main: primary,
        light: tinycolor(primary).lighten(54).toHexString()
      },
      secondary: {
        main: secondary,
        light: tinycolor(secondary).lighten(54).toHexString()
      },
      text: {
        primary: mainTextColor,
        secondary: tinycolor(mainTextColor).lighten(22).toHexString()
      },
      bgColor: { main: bgColor },
      border: border
    }
  }

  return { appTheme }
}

export default MyApp
