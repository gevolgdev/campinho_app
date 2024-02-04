import { Dispatch, SVGProps, SetStateAction } from 'react'

export interface InputTextProps {
	label: string
	placeholderLabel: string
	text: string
	Icon: React.FC
	setText: Dispatch<SetStateAction<string>>
}
