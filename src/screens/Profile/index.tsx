import { createElement } from 'react'
import { ProfileView } from './view'

function ProfileScreen({ navigation }: { navigation: any }) {
	const ProfileTitle = '👥 Profile'

	const props = { ProfileTitle, navigation }

	return createElement(ProfileView, props)
}

export { ProfileScreen }
