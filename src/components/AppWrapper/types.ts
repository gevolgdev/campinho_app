import { ReactNode } from 'react'
import type { NavigationProp } from '@react-navigation/native'
import { ERoutes } from '../../routes/enum'

export interface AppWrapperProps {
	children: ReactNode
	navigation?: NavigationProp<ERoutes>
}
