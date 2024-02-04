import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Container, Button, Label } from './style'
import { ERoutes } from '../enum'
import HomeTabIcon from '../../../assets/icons/HomeTabIcon.svg'
import FeedTabIcon from '../../../assets/icons/FeedTabIcon.svg'
import EventTabIcon from '../../../assets/icons/EventTabIcon.svg'
import ProfileTabIcon from '../../../assets/icons/ProfileTabIcon.svg'
import { useTheme } from 'styled-components/native'

function BottomBarView({ state, navigation }: BottomTabBarProps) {
	const theme = useTheme()

	return (
		<Container>
			{state.routes.map(({ name }, index) => {
				const translateLabel: { [key: string]: any } = {
					[ERoutes.HOME]: 'Início',
					[ERoutes.FEED]: 'Feed',
					[ERoutes.EVENTS]: 'Eventos',
					[ERoutes.PROFILE]: 'Perfil',
				}

				const isFocused = state.index === index
				const iconColor = isFocused ? theme.colors.pink : 'white'

				const icon: { [key: string]: any } = {
					[ERoutes.HOME]: <HomeTabIcon color={iconColor} />,
					[ERoutes.FEED]: <FeedTabIcon color={iconColor} />,
					[ERoutes.EVENTS]: <EventTabIcon color={iconColor} />,
					[ERoutes.PROFILE]: <ProfileTabIcon color={iconColor} />,
				}

				function handleNavigate() {
					navigation.navigate(name)
				}

				return (
					<Button onPress={handleNavigate}>
						{icon[name]}
						<Label iconColor={iconColor}>{translateLabel[name]}</Label>
					</Button>
				)
			})}
		</Container>
	)
}

export { BottomBarView }
