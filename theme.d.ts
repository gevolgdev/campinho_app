import 'styled-components/native'
import { theme } from './src/styles/theme'

declare module 'styled-components/native' {
	type ThemeType = typeof theme

	export interface DefaultTheme extends ThemeType {}
}
