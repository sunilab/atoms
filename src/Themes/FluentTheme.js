const colors = require('./Fluent/Colors');

const defaultFonts = 'Segoe UI';
const lightTheme = {
    name: "FLUENT-LIGHT",
    colors: colors.light,
    fonts: {
		caption: {
			family: defaultFonts,
			size: '0.8rem',
			weight: 400,
			lineHeight: '0.93rem'
		},
		body: {
			family: defaultFonts,
			size: '1rem',
			weight: 400,
			lineHeight: '1.33rem'
		},
		base: {
			family: defaultFonts,
			size: '1rem',
			weight: 600,
			lineHeight: '1.33rem'
		},
		subtitle: {
			family: defaultFonts,
			size: '1.33rem',
			weight: 400,
			lineHeight: '1.6rem'
		},
		title: {
			family: defaultFonts,
			size: '1.6rem',
			weight: 300,
			lineHeight: '1.87rem'
		},
		subHeader: {
			family: defaultFonts,
			size: '2.27rem',
			weight: 200,
			lineHeight: '2.67rem'
		},
		header: {
			family: defaultFonts,
			size: '3.07rem',
			weight: 200,
			lineHeight: '3.73rem'
		}
	}
};

const darkTheme = {
    name: "FLUENT-DARK",
    colors: colors.dark,
    fonts: {
		caption: {
			family: defaultFonts,
			size: '0.8rem',
			weight: 400,
			lineHeight: '0.93rem'
		},
		body: {
			family: defaultFonts,
			size: '1rem',
			weight: 400,
			lineHeight: '1.33rem'
		},
		base: {
			family: defaultFonts,
			size: '1rem',
			weight: 600,
			lineHeight: '1.33rem'
		},
		subtitle: {
			family: defaultFonts,
			size: '1.33rem',
			weight: 400,
			lineHeight: '1.6rem'
		},
		title: {
			family: defaultFonts,
			size: '1.6rem',
			weight: 300,
			lineHeight: '1.87rem'
		},
		subHeader: {
			family: defaultFonts,
			size: '2.27rem',
			weight: 200,
			lineHeight: '2.67rem'
		},
		header: {
			family: defaultFonts,
			size: '3.07rem',
			weight: 200,
			lineHeight: '3.73rem'
		}
	}
};

let FluentTheme = {
    light: lightTheme,
    dark: darkTheme
};

export default FluentTheme;