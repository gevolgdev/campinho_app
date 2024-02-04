import React from 'react'
import { Container } from './style'
import { IPageProps } from './types'
import { AppWrapper } from '../../components/AppWrapper'
import { Header } from '../../components/Header'

function EventsView({ navigation }: IPageProps) {
	return (
		<AppWrapper navigation={navigation}>
			<Container>
				<Header />
			</Container>
		</AppWrapper>
	)
}

export { EventsView }
