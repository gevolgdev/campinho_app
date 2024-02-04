import styled, { css } from 'styled-components/native'

export const InputContainer = styled.View<{ focused: boolean }>`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 15px 20px;
	margin-bottom: 20px;
	border-radius: 8px;
	color: white;
	background-color: ${({ theme }) => theme.colors.graySecondary};
	border: solid 1px
		${({ theme, focused }) =>
			focused ? theme.colors.pink : theme.colors.graySecondary};
`

export const InputLabel = styled.Text`
	font-size: 12px;
	color: ${({ theme }) => theme.colors.lightGray};
`

export const Input = styled.TextInput`
	padding-top: 5px;
	font-size: 16px;
	color: white;
`
