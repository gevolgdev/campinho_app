import { Text } from 'react-native'
import {
	Container,
	MenuContent,
	MenuOptions,
	Option,
	OptionLabel,
	Separator,
} from './style'
import Logo from '../../../assets/icons/Logo.svg'
import Home from '../../../assets/icons/HomeTabIcon.svg'
import Friends from '../../../assets/icons/FriendsMenuIcon.svg'
import Event from '../../../assets/icons/EventTabIcon.svg'
import Feed from '../../../assets/icons/FeedTabIcon.svg'

function Menu() {
	const optionsLinks = [
		{ Icon: <Home width={20} color={'white'} />, label: 'Início' },
		{
			Icon: <Friends width={20} height={20} color={'white'} />,
			label: 'Ver amigos',
		},
		{ Icon: <Event width={20} color={'white'} />, label: 'Criar evento' },
		{ Icon: <Feed width={20} color={'white'} />, label: 'Nova nota' },
	]

	return (
		<Container>
			<MenuContent>
				<Logo width={200} height={113} style={{ marginBottom: 50 }} />
				<Separator />

				<MenuOptions>
					{optionsLinks.map(({ Icon, label }) => (
						<Option>
							{Icon}
							<OptionLabel>{label}</OptionLabel>
						</Option>
					))}
					<Separator />
				</MenuOptions>
			</MenuContent>
		</Container>
	)
}

export { Menu }
