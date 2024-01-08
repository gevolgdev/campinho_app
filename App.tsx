import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<Routes />
			</NavigationContainer>
		</ThemeProvider>
	)
}

export default App
