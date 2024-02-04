import React from 'react'
import { Container } from './style'
import { IPageProps } from './types'
import { AppWrapper } from '../../components/AppWrapper'
import { Header } from '../../components/Header'
import { Text } from 'react-native'

function HomeView({ navigation }: IPageProps) {
	return (
		<AppWrapper navigation={navigation}>
			<Container>
				<Header />
				<Text style={{ color: 'white' }}>Home</Text>
			</Container>
		</AppWrapper>
	)
}

export { HomeView }
