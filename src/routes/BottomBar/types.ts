import { FunctionComponentElement } from 'react'
import { ERoutes } from '../enum'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

export interface IBottomBarRoutes {
	name: ERoutes
	screen: ({ navigation }: any) => FunctionComponentElement<any>
	options?: BottomTabNavigationOptions
}
