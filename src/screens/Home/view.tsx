import React from 'react'
import { Container } from './style'
import { Text } from 'react-native'
import { IPageProps } from './types'

function HomeView({ HomeTitle }: IPageProps) {
	return (
		<Container>
			<Text>{HomeTitle}</Text>
		</Container>
	)
}

export { HomeView }
