import { createElement } from 'react'
import { SchedulesView } from './view'

function SchedulesScreen() {
	const SchedulesTitle = '📆 Schedules'

	const props = { SchedulesTitle }

	return createElement(SchedulesView, props)
}

export { SchedulesScreen }
