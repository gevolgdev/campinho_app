import { createElement } from 'react'
import { HomeView } from './view'

function HomeScreen() {
	const HomeTitle = '🏠 Home'

	const props = { HomeTitle }

	return createElement(HomeView, props)
}

export { HomeScreen }
