import { createElement } from 'react'
import { EventsView } from './view'

function EventsScreen({ navigation }: { navigation: any }) {
	const EventsTitle = '📆 Events'

	const props = { EventsTitle, navigation }

	return createElement(EventsView, props)
}

export { EventsScreen }
