import React from 'react'
import { Container } from './style'
import { Text } from 'react-native'
import { IPageProps } from './types'

function FriendsView({ FriendsTitle }: IPageProps) {
	return (
		<Container>
			<Text>{FriendsTitle}</Text>
		</Container>
	)
}

export { FriendsView }
