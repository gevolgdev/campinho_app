import { FunctionComponentElement } from 'react'
import { ERoutes } from './enum'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/Home'
import { FriendsScreen } from '../screens/Friends'
import { EventsScreen } from '../screens/Events'
import BottomBar from './BottomBar'

interface IRoutes {
	name: ERoutes
	screen: ({ navigation }: any) => FunctionComponentElement<any>
	options?: NativeStackNavigationOptions
}

const routeLists: IRoutes[] = [
	{
		name: ERoutes.BOTTOM_BAR,
		screen: BottomBar,
	},
	{
		name: ERoutes.HOME,
		screen: HomeScreen,
	},
	{
		name: ERoutes.FRIENDS,
		screen: FriendsScreen,
	},
	{
		name: ERoutes.EVENTS,
		screen: EventsScreen,
	},
	{
		name: ERoutes.PROFILE,
		screen: EventsScreen,
	},
	{
		name: ERoutes.FEED,
		screen: EventsScreen,
	},
]

export { routeLists }
