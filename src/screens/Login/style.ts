import styled from 'styled-components/native'

export const Container = styled.View`
	align-items: center;
	padding: 30px;
	min-height: 100%;
	z-index: 999;
`

export const Content = styled.View`
	margin-top: 150px;
	width: 100%;
`

export const InputContainer = styled.View`
	padding: 15px 20px;
	border-radius: 8px;
	color: white;
	background-color: ${({ theme }) => theme.colors.graySecondary};
`

export const InputLabel = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.lightGray};
`

export const Input = styled.TextInput<{ ref: any }>`
	padding-top: 5px;
	font-size: 16px;
	color: white;
`
