import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routeLists } from './routes'

const Stack = createStackNavigator()

function Routes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{React.Children.toArray(
				routeLists.map(({ name, screen, options }) => (
					<Stack.Screen name={name} component={screen} options={{}} />
				)),
			)}
		</Stack.Navigator>
	)
}

export { Routes }
