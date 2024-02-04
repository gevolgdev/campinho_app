import { FunctionComponentElement } from 'react'
import { ERoutes } from './enum'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/Home'
import { FriendsScreen } from '../screens/Friends'
import { EventsScreen } from '../screens/Events'
import BottomBar from './BottomBar'
import { LoginScreen } from '../screens/Login'
import { useStore } from '../store/store'

interface IRoutes {
	name: ERoutes
	screen: ({ navigation }: any) => FunctionComponentElement<any>
	options?: NativeStackNavigationOptions
}

const routeLists: IRoutes[] = [
	{
		name: ERoutes.BOTTOM_BAR,
		screen: BottomBar,
		options: {},
	},
	{
		name: ERoutes.HOME,
		screen: HomeScreen,
		options: {},
	},
	{
		name: ERoutes.FRIENDS,
		screen: FriendsScreen,
		options: {},
	},
	{
		name: ERoutes.EVENTS,
		screen: EventsScreen,
		options: {},
	},
	{
		name: ERoutes.PROFILE,
		screen: EventsScreen,
		options: {},
	},
	{
		name: ERoutes.FEED,
		screen: EventsScreen,
		options: {},
	},
	{
		name: ERoutes.LOGIN,
		screen: LoginScreen,
		options: {},
	},
]

export { routeLists }
