import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { routeLists } from './routes'
import { ERoutes } from './enum'
const Drawer = createDrawerNavigator()

function Routes() {
	function translateLabelName(routeName: string) {
		if (routeName === ERoutes.HOME) return 'Início'
		if (routeName === ERoutes.FRIENDS) return 'Amigos'
		if (routeName === ERoutes.SCHEDULES) return 'Agendar rolê'
	}

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: { backgroundColor: '#1f1f1f' },
				headerShown: false,
			}}
		>
			{React.Children.toArray(
				routeLists.map(({ name, screen, options }) => (
					<Drawer.Screen
						name={name}
						component={screen}
						options={({ route }) => ({
							drawerLabel: translateLabelName(route.name),
							drawerLabelStyle: { color: 'white' },
						})}
					/>
				)),
			)}
		</Drawer.Navigator>
	)
}

export { Routes }
