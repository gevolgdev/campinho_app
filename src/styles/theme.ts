const theme = {
	colors: {
		white: '#FFFFFF',
		pink: '#E22D5A',
		background: '#0E1013',
		gray: '#22252C',
		graySecondary: '#22252C',
		lightGray: '#D9D9D9',
		green: '#0FF040',
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

type ColorType = keyof typeof theme.colors
type FontType = keyof typeof theme.fonts

export type { ColorType, FontType }

export { theme }
