import Colors from './Colors';
import Fonts from './Fonts';

const defaultFonts = 'Segoe UI';

const lightTheme = {
    name: "FLUENT-LIGHT",
    colors: Colors.light,
    fonts: Fonts
};

const darkTheme = {
    name: "FLUENT-DARK",
    colors: Colors.dark,
    fonts: Fonts
};

let FluentTheme = {
    light: lightTheme,
    dark: darkTheme
};

export default FluentTheme;