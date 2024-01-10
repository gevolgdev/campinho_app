const theme = {
	color: {
		black: '#0C0C0C',
	},
	fonts: {
		black: 'InterTight-Black',
		bold: 'InterTight-Bold',
		extraBold: 'InterTight-ExtraBold',
		extraLight: 'InterTight-ExtraLight',
		light: 'InterTight-Light',
		medium: 'InterTight-Medium',
		regular: 'InterTight-Regular',
		semiBold: 'InterTight-SemiBold',
		thin: 'InterTight-Thin',
	},
}

type ColorType = keyof typeof theme.color
type FontType = keyof typeof theme.fonts

export type { ColorType, FontType }

export { theme }
