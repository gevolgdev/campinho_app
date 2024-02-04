import { createElement } from 'react'
import { LoginView } from './view'
import { useLogin } from '../../store/useLogin'

function LoginScreen({ navigation }: { navigation: any }) {
	const LoginTitle = '👥 Login'
	const setIsLogin = useLogin((state) => state.setIsLogin)

	const props = { LoginTitle, navigation, setIsLogin }

	return createElement(LoginView, props)
}

export { LoginScreen }
