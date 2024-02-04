import styled from 'styled-components/native'

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Notifications = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 45px;
	background-color: ${({ theme }) => theme.colors.graySecondary};
	border-radius: 100px;
`

export const NotificationsAlert = styled.View`
	position: absolute;
	top: 2px;
	right: 2px;
	border-radius: 100px;
	width: 10px;
	height: 10px;
	background-color: ${({ theme }) => theme.colors.pink};
`
