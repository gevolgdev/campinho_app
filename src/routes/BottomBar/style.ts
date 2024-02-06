import styled from 'styled-components/native'

export const Container = styled.View`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 20px 50px 40px;
	background-color: ${({ theme }) => theme.colors.gray};

	flex-direction: row;
	justify-content: space-between;
	z-index: 0;
`

export const Button = styled.TouchableOpacity`
	align-items: center;
`

export const Label = styled.Text<{ iconColor: string }>`
	margin-top: 7px;
	color: ${({ iconColor }) => iconColor};
	font-size: 12px;
`
