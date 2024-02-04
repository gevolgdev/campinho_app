import { createElement } from 'react'
import { HomeView } from './view'
import { useTheme } from 'styled-components'

function HomeScreen({ navigation }: any) {
	const theme = useTheme()

	const props = { theme, navigation }

	return createElement(HomeView, props)
}

export { HomeScreen }
