import React from 'react'
import { Container } from './style'
import { IPageProps } from './types'
import { AppWrapper } from '../../components/AppWrapper'
import { Header } from '../../components/Header'
import { Text } from 'react-native'

function ProfileView({ navigation }: IPageProps) {
	return (
		<AppWrapper navigation={navigation}>
			<Container>
				<Text style={{ color: 'white' }}>Perfil</Text>
			</Container>
		</AppWrapper>
	)
}

export { ProfileView }
