# Atoms
Basic building blocks of web applications

# List of components
- Textbox
- Button
- Label

# Installation
npm install @phyxius/atoms

# Features
- Inverted CSS adoption
- Interface based components
    - interaction through props
- Composition
	- Atomic components compose to create complex components binding through props (interfaces)
- Skin as a HOC
- Behavior as a HOC

# Details
## Themeable
	Define color palette
		AccentColorLight3
		AccentColorLight2
		AccentColorLight1
		AccentColor
		AccentColorDark1
		AccentColorDark2
		AccentColorDark3
		TextColorDark
		TextColorLight
		
## Fluent Colors:
https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/xaml-theme-resources#the-xaml-color-ramp-and-theme-dependent-brushes
- Colors: https://docs.microsoft.com/en-us/windows/uwp/design/style/color
- Styles: https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/xaml-styles

- Base is for text.
- Alt is the inverse of Base.
- Chrome is for top-level elements, such as navigation panes or command bars.
- List is for list controls.
- Low/Medium/High refer to the intensity of the color.

aaRRGGBB format HEX8 to rgba converter
https://jsfiddle.net/teddyrised/g02s07n4/embedded/result/



	fonts - families, weights
		Type     || Size (px)(rem) | Font Weight      | Line Height (px)(rem)
		(Poppins)
		----        ---------   	 -----------        ----------------
		Header   || 46|3.07        | ExtraLight (200) | 56|3.73
		Subheader|| 34|2.27        | ExtraLight (200) | 40|2.67
		Title    || 24|1.6         | Light      (300) | 28|1.87
		Subtitle || 20|1.33        | Regular    (400) | 24|1.6
 		Base     || 15|1           | SemiBold   (600) | 20|1.33
		Body     || 15|1           | Regular    (400) | 20|1.33
		Caption  || 12|0.8         | Regular    (400) | 14|0.93

## Button Design
### Base
- background-color: BaseLow
- color: BaseHigh
- border: none
### Hover
- border: 
### Mouse Down

### Disabled
- color: BaseMediumLow

```json
const theme = {
	colors: {
		themes: {
			dark: {
				colors: {
					baseLow: rgba(255, 255, 255, 0.2),
					baseMediumLow: rgba(255, 255, 255, 0.4), // disabled UI but also borders
					baseMedium: rgba(255, 255, 255, 0.6), // secondary text
					baseMediumHigh: rgba(255, 255, 255, 0.8),
					baseHigh: rgba(255, 255, 255, 1), // primary text
					listLow: rgba(255, 255, 255, 0.1),
					listMedium: rgba(255, 255, 255, 0.2),
					listAccentLow: rgba(0, 120, 215, 0.6), // list selected BG
					listAccentMedium: rgba(0, 120, 215, 0.8),
					listAccentHigh: rgba(0, 120, 215, 0.9), // input box selected border, checkbox, radio button, toggle BG
					chromeLow: rgba(23, 23, 23, 1),
					chromeMediumLow: rgba(43, 43, 43, 1), // pane backgrounds
					chromeMedium: rgba(31, 31, 31, 1),
					chromeHigh: rgba(118, 118, 118, 1),
					chromeBlackLow: rgba(0, 0, 0, 0.2),
					chromeBlackMediumLow: rgba(0, 0, 0, 0.4),
					chromeBlackMedium: rgba(0, 0, 0, 0.8),
					chromeBlackHigh: rgba(0, 0, 0, 1),
					chromeWhite: rgba(255, 255, 255, 1)
				}
			},
			light: {
				colors: {
					baseLow: rgba(0, 0, 0, 0.2),
					baseMediumLow: rgba(0, 0, 0, 0.4), // disabled UI but also borders
					baseMedium: rgba(0, 0, 0, 0.6), // secondary text
					baseMediumHigh: rgba(0, 0, 0, 0.8),
					baseHigh: rgba(0, 0, 0, 1), // primary text
					listLow: rgba(0, 0, 0, 0.1),
					listMedium: rgba(0, 0, 0, 0.2),
					listAccentLow: rgba(0, 120, 215, 0.6), // list selected BG
					listAccentMedium: rgba(0, 120, 215, 0.8),
					listAccentHigh: rgba(0, 120, 215, 0.9), // input box selected border, checkbox, radio button, toggle BG
					chromeLow: rgba(242, 242, 242, 1),
					chromeMediumLow: rgba(242, 242, 242, 1), // pane backgrounds
					chromeMedium: rgba(230, 230, 230, 1),
					chromeHigh: rgba(204, 204, 204, 1),
					chromeBlackLow: rgba(0, 0, 0, 0.2),
					chromeBlackMediumLow: rgba(0, 0, 0, 0.4),
					chromeBlackMedium: rgba(0, 0, 0, 0.8),
					chromeBlackHigh: rgba(0, 0, 0, 1),
					chromeWhite:  rgba(255, 255, 255, 1)
				}
			}
		}
	},
	fonts: {
		caption: {
			family: 'poppins',
			size: 0.8rem,
			weight: 400,
			lineHeight: 0.93
		},
		body: {
			family: 'poppins',
			size: 1rem,
			weight: 400,
			lineHeight: 1.33
		},
		base: {
			family: 'poppins',
			size: 1rem,
			weight: 600,
			lineHeight: 1.33
		},
		subtitle: {
			family: 'poppins',
			size: 1.33rem,
			weight: 400,
			lineHeight: 1.6
		},
		title: {
			family: 'poppins',
			size: 1.6rem,
			weight: 300,
			lineHeight: 1.87
		},
		subHeader: {
			family: 'poppins',
			size: 2.27rem,
			weight: 200,
			lineHeight: 2.67
		},
		header: {
			family: 'poppins',
			size: 3.07rem,
			weight: 200,
			lineHeight: 3.73
		}
	}
}
```