import React from 'react'
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native'
import { SafeArea } from './src/styles/SafeArea'

function App(): React.JSX.Element {
	return (
		<SafeArea>
			<ScrollView contentInsetAdjustmentBehavior='automatic'>
				<View
					style={{
						backgroundColor: 'white',
					}}
				>
					<Text>CAMPINHO APP</Text>
				</View>
			</ScrollView>
		</SafeArea>
	)
}

export default App
