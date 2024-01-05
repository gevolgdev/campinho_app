import React from 'react'
import { Container } from './style'
import { Text } from 'react-native'
import { IPageProps } from './types'

function SchedulesView({ SchedulesTitle }: IPageProps) {
	return (
		<Container>
			<Text>{SchedulesTitle}</Text>
		</Container>
	)
}

export { SchedulesView }
