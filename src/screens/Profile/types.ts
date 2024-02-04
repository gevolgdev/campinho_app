import type { NavigationProp } from '@react-navigation/native'
import { ERoutes } from '../../routes/enum'

export interface IPageProps {
	navigation: NavigationProp<ERoutes>
}
