import { createElement } from 'react'
import { FriendsView } from './view'

function FriendsScreen({ navigation }: { navigation: any }) {
	const FriendsTitle = '👥 Friends'

	const props = { FriendsTitle, navigation }

	return createElement(FriendsView, props)
}

export { FriendsScreen }
