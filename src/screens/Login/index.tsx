import { createElement } from 'react'
import { LoginView } from './view'

function LoginScreen({ navigation }: { navigation: any }) {
	const LoginTitle = '👥 Login'

	const props = { LoginTitle, navigation }

	return createElement(LoginView, props)
}

export { LoginScreen }
