import React from 'react'
import { Container, Title } from './style'
import { Text } from 'react-native'
import { IPageProps } from './types'

function HomeView({ HomeTitle }: IPageProps) {
	return (
		<Container>
			<Title>{HomeTitle}</Title>
		</Container>
	)
}

export { HomeView }
