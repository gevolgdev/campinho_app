import styled from 'styled-components/native'

export const SafeArea = styled.SafeAreaView`
	background-color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.View`
	padding: 30px;
	min-height: 100%;
`

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.black};
`
