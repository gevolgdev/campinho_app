import React from 'react'
import { Container } from './style'
import { IPageProps } from './types'
import { AppWrapper } from '../../components/AppWrapper'
import { Header } from '../../components/Header'
import { Text } from 'react-native'

function FeedView({ navigation }: IPageProps) {
	return (
		<AppWrapper navigation={navigation}>
			<Container>
				<Text style={{ color: 'white' }}>Feed</Text>
			</Container>
		</AppWrapper>
	)
}

export { FeedView }
