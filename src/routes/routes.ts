import { FunctionComponentElement } from 'react'
import { ERoutes } from './enum'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/Home'
import { FriendsScreen } from '../screens/Friends'
import { SchedulesScreen } from '../screens/Schedules'

interface IRoutes {
	name: ERoutes
	screen: () => FunctionComponentElement<any>
	options?: NativeStackNavigationOptions
}

const routeLists: IRoutes[] = [
	{ name: ERoutes.HOME, screen: HomeScreen },
	{
		name: ERoutes.FRIENDS,
		screen: FriendsScreen,
	},
	{ name: ERoutes.SCHEDULES, screen: SchedulesScreen },
]

export { routeLists }
