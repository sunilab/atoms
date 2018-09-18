const colors = {
    dark: {
        baseLow: 'rgba(255, 255, 255, 0.2)',
        baseMediumLow: 'rgba(255, 255, 255, 0.4)', // disabled UI but also borders
        baseMedium: 'rgba(255, 255, 255, 0.6)', // secondary text
        baseMediumHigh: 'rgba(255, 255, 255, 0.8)',
        baseHigh: 'rgba(255, 255, 255, 1)', // primary text
        altHigh: 'rgba(0, 0, 0, 1)', // white 100%
        listLow: 'rgba(255, 255, 255, 0.1)',
        listMedium: 'rgba(255, 255, 255, 0.2)',
        listAccentLow: 'rgba(0, 120, 215, 0.6)', // list selected BG
        listAccentMedium: 'rgba(0, 120, 215, 0.8)',
        listAccentHigh: 'rgba(0, 120, 215, 0.9)', // input box selected border, checkbox, radio button, toggle BG
        chromeLow: 'rgba(23, 23, 23, 1)',
        chromeMediumLow: 'rgba(43, 43, 43, 1)', // pane backgrounds
        chromeMedium: 'rgba(31, 31, 31, 1)',
        chromeHigh: 'rgba(118, 118, 118, 1)',
        chromeBlackLow: 'rgba(0, 0, 0, 0.2)',
        chromeBlackMediumLow: 'rgba(0, 0, 0, 0.4)',
        chromeBlackMedium: 'rgba(0, 0, 0, 0.8)',
        chromeBlackHigh: 'rgba(0, 0, 0, 1)',
        chromeWhite: 'rgba(255, 255, 255, 1)'
    },
    light: {
        baseLow: 'rgba(0, 0, 0, 0.2)',
        baseMediumLow: 'rgba(0, 0, 0, 0.4)', // disabled UI but also borders
        baseMedium: 'rgba(0, 0, 0, 0.6)', // secondary text
        baseMediumHigh: 'rgba(0, 0, 0, 0.8)',
        baseHigh: 'rgba(0, 0, 0, 1)', // primary text
        altHigh: 'rgba(255, 255, 255, 1)', // black 100%
        listLow: 'rgba(0, 0, 0, 0.1)',
        listMedium: 'rgba(0, 0, 0, 0.2)',
        listAccentLow: 'rgba(0, 120, 215, 0.6)', // list selected BG
        listAccentMedium: 'rgba(0, 120, 215, 0.8)',
        listAccentHigh: 'rgba(0, 120, 215, 0.9)', // input box selected border, checkbox, radio button, toggle BG
        chromeLow: 'rgba(242, 242, 242, 1)',
        chromeMediumLow: 'rgba(242, 242, 242, 1)', // pane backgrounds
        chromeMedium: 'rgba(230, 230, 230, 1)',
        chromeHigh: 'rgba(204, 204, 204, 1)',
        chromeBlackLow: 'rgba(0, 0, 0, 0.2)',
        chromeBlackMediumLow: 'rgba(0, 0, 0, 0.4)',
        chromeBlackMedium: 'rgba(0, 0, 0, 0.8)',
        chromeBlackHigh: 'rgba(0, 0, 0, 1)',
        chromeWhite:  'rgba(255, 255, 255, 1)'
    }
};

let fluentFonts = 'Segoe UI';
const defaultTheme = {
    name: "FLUENT-LIGHT",
    colors: colors.light,
    fonts: {
		caption: {
			family: fluentFonts,
			size: '0.8rem',
			weight: 400,
			lineHeight: '0.93rem'
		},
		body: {
			family: fluentFonts,
			size: '1rem',
			weight: 400,
			lineHeight: '1.33rem'
		},
		base: {
			family: fluentFonts,
			size: '1rem',
			weight: 600,
			lineHeight: '1.33rem'
		},
		subtitle: {
			family: fluentFonts,
			size: '1.33rem',
			weight: 400,
			lineHeight: '1.6rem'
		},
		title: {
			family: fluentFonts,
			size: '1.6rem',
			weight: 300,
			lineHeight: '1.87rem'
		},
		subHeader: {
			family: fluentFonts,
			size: '2.27rem',
			weight: 200,
			lineHeight: '2.67rem'
		},
		header: {
			family: fluentFonts,
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
			family: fluentFonts,
			size: '0.8rem',
			weight: 400,
			lineHeight: '0.93rem'
		},
		body: {
			family: fluentFonts,
			size: '1rem',
			weight: 400,
			lineHeight: '1.33rem'
		},
		base: {
			family: fluentFonts,
			size: '1rem',
			weight: 600,
			lineHeight: '1.33rem'
		},
		subtitle: {
			family: fluentFonts,
			size: '1.33rem',
			weight: 400,
			lineHeight: '1.6rem'
		},
		title: {
			family: fluentFonts,
			size: '1.6rem',
			weight: 300,
			lineHeight: '1.87rem'
		},
		subHeader: {
			family: fluentFonts,
			size: '2.27rem',
			weight: 200,
			lineHeight: '2.67rem'
		},
		header: {
			family: fluentFonts,
			size: '3.07rem',
			weight: 200,
			lineHeight: '3.73rem'
		}
	}
};

module.exports = {
    Fluent: {
        light: defaultTheme,
        dark: darkTheme
    }
};
