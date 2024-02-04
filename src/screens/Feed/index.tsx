import { createElement } from 'react'
import { FeedView } from './view'

function FeedScreen({ navigation }: { navigation: any }) {
	const FeedTitle = '👥 Feed'

	const props = { FeedTitle, navigation }

	return createElement(FeedView, props)
}

export { FeedScreen }
