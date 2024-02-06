import styled from 'styled-components/native'

export const Container = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #1e1e1e60;
	z-index: 2;
`

export const MenuContent = styled.View`
	padding: 100px 30px;
	width: 70%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.background};
`

export const MenuOptions = styled.View`
	margin-top: 50px;
`

export const Option = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin-bottom: 50px;
`

export const OptionLabel = styled.Text`
	font-family: ${({ theme }) => theme.fonts.semiBold};
	color: ${({ theme }) => theme.colors.white};
	font-size: 20px;
	margin-left: 20px;
`

export const Separator = styled.View`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.lightGray};
	opacity: 30;
`
