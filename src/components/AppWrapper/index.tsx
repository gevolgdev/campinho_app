import { Container } from './style'
import { AppWrapperProps } from './types'

function AppWrapper({ children, navigation }: AppWrapperProps) {
	return <Container>{children}</Container>
}

export { AppWrapper }
