const theme = {
	color: {
		black: '#0C0C0C',
	},
}

type ColorType = keyof typeof theme.color

export type { ColorType }

export { theme }
