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
https://docs.microsoft.com/en-us/windows/uwp/design/style/color

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

```json
const theme = {
	colors: {
		
	},
	fonts: {
		caption: {
			size: 0.8rem,
			fontWeight: 400,
			lineHeight: 0.93
		},
		body: {
			size: 1rem,
			fontWeight: 400,
			lineHeight: 1.33
		},
		base: {
			size: 1rem,
			fontWeight: 600,
			lineHeight: 1.33
		},
		subtitle: {
			size: 1.33rem,
			fontWeight: 400,
			lineHeight: 1.6
		},
		title: {
			size: 1.6rem,
			fontWeight: 300,
			lineHeight: 1.87
		},
		subHeader: {
			size: 2.27rem,
			fontWeight: 200,
			lineHeight: 2.67
		},
		header: {
			size: 3.07rem,
			fontWeight: 200,
			lineHeight: 3.73
		}
	}
}
```