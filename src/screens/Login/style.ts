import styled from 'styled-components/native'

export const Container = styled.View`
	align-items: center;
	padding: 30px;
	height: 100%;
`

export const Content = styled.View`
	margin-top: 100px;
	width: 100%;
`

export const Title = styled.Text`
	font-size: 36px;
	color: white;
	font-family: ${({ theme }) => theme.fonts.extraBold};
`

export const SubTitle = styled.Text`
	font-size: 36px;
	color: white;
	font-family: ${({ theme }) => theme.fonts.semiBold};
	margin-bottom: 30px;
`

export const EnterLogin = styled.TouchableOpacity`
	align-items: center;
	padding: 23px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.pink};
`
export const EnterLoginLabel = styled.Text`
	font-size: 16px;
	color: white;
	font-family: ${({ theme }) => theme.fonts.semiBold};
`

export const ForgotLabel = styled.Text`
	font-size: 14px;
	margin: 0 auto;
	color: ${({ theme }) => theme.colors.pink};
	margin-top: 30px;
`

export const RegisterLabel = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.lightGray};
	margin-top: auto;
`
export const GoRegister = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.pink};
	font-family: ${({ theme }) => theme.fonts.extraBold};
`
