import { createElement } from 'react'
import { FriendsView } from './view'

function FriendsScreen() {
	const FriendsTitle = '👥 Friends'

	const props = { FriendsTitle }

	return createElement(FriendsView, props)
}

export { FriendsScreen }
