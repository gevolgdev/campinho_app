import { View } from 'react-native'
import { Input, InputContainer, InputLabel } from './style'
import { InputTextProps } from './types'
import { useTheme } from 'styled-components'
import { useState } from 'react'

function InputText({
	label,
	placeholderLabel,
	Icon,
	text,
	setText,
}: InputTextProps) {
	const theme = useTheme()
	const [focused, setFocused] = useState(false)

	return (
		<InputContainer focused={focused}>
			<View>
				<InputLabel>{label}</InputLabel>
				<Input
					placeholder={placeholderLabel}
					placeholderTextColor={theme.colors.lightGray}
					onChangeText={(text) => setText(text.toLocaleLowerCase())}
					value={text}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				/>
			</View>
			<Icon />
		</InputContainer>
	)
}

export { InputText }
