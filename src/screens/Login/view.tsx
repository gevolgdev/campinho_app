import React, { useCallback, useRef, useState } from 'react'
import { Container, Content, Input, InputContainer, InputLabel } from './style'
import { IPageProps } from './types'
import { AppWrapper } from '../../components/AppWrapper'
import Logo from '../../../assets/icons/Logo.svg'
import { useTheme } from 'styled-components'
import { Button, Text, TextInput, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function LoginView({ navigation }: IPageProps) {
	const theme = useTheme()
	const inputRef = useRef<TextInput>(null)
	const [textInput, setTextInput] = useState('')

	return (
		<AppWrapper navigation={navigation}>
			<Container>
				<Logo />

				<Content>
					<InputContainer>
						<InputLabel>Nome</InputLabel>
						<Input
							ref={inputRef}
							placeholder='Digite seu nome'
							placeholderTextColor={theme.colors.lightGray}
							onChangeText={(text) => setTextInput(text.toLocaleLowerCase())}
							value={textInput}
						/>
					</InputContainer>
				</Content>
			</Container>
		</AppWrapper>
	)
}

export { LoginView }
