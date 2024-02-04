import React from 'react'

import type { NavigationProp } from '@react-navigation/native'
import { ERoutes } from '../enum'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../../screens/Home'
import { FriendsScreen } from '../../screens/Friends'
import { EventsScreen } from '../../screens/Events'
import { IBottomBarRoutes } from './types'
import { BottomBarView } from './view'
import { ProfileScreen } from '../../screens/Profile'
import { FeedScreen } from '../../screens/Feed'
import { useStore } from '../../store/useLogin'
interface IPageProps {
	navigation: NavigationProp<ERoutes>
}

const Tab = createBottomTabNavigator()

function BottomBarNavigator({ navigation }: IPageProps) {
	const bottomBarRouteLists: IBottomBarRoutes[] = [
		{
			name: ERoutes.HOME,
			screen: HomeScreen,
		},
		{
			name: ERoutes.FEED,
			screen: FeedScreen,
		},
		{
			name: ERoutes.EVENTS,
			screen: EventsScreen,
		},
		{
			name: ERoutes.PROFILE,
			screen: ProfileScreen,
		},
	]

	return (
		<Tab.Navigator
			initialRouteName={ERoutes.HOME}
			tabBar={(props) => <BottomBarView {...props} />}
			screenOptions={{
				headerShown: false,
			}}
		>
			{React.Children.toArray(
				bottomBarRouteLists.map(({ name, screen, options }) => (
					<Tab.Screen name={name} component={screen} options={options} />
				)),
			)}
		</Tab.Navigator>
	)
}

export default BottomBarNavigator
