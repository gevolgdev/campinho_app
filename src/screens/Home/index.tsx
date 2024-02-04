import { createElement, useEffect } from 'react'
import { HomeView } from './view'
import { useTheme } from 'styled-components'
import { ERoutes } from '../../routes/enum'
import { useLogin } from '../../store/useLogin'

function HomeScreen({ navigation }: any) {
	const theme = useTheme()
	const isLogin = useLogin((state: any) => state.isLogin)

	useEffect(() => {
		if (!isLogin) return navigation.navigate(ERoutes.LOGIN)

		return navigation.navigate(ERoutes.HOME)
	}, [isLogin])

	const props = { theme, navigation }

	return createElement(HomeView, props)
}

export { HomeScreen }
