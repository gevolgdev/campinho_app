import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { Container, Notifications, NotificationsAlert } from './style'
import MenuIcon from '../../../assets/icons/ToggleIcon.svg'
import NotificationIcon from '../../../assets/icons/NotificationIcon.svg'

function Header() {
	const theme = useTheme()

	return (
		<Container>
			<TouchableOpacity onPress={() => {}}>
				<MenuIcon width={25} height={25} color={theme.colors.pink} />
			</TouchableOpacity>

			<Notifications>
				<NotificationsAlert />
				<NotificationIcon width={18} />
			</Notifications>
		</Container>
	)
}

export { Header }
