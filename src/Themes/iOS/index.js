import Colors from './Colors';
import Fonts from './Fonts';

const lightTheme = {
    name: "iOS-LIGHT",
    colors: Colors.light,
    fonts: Fonts
};

const darkTheme = {
    name: "iOS-DARK",
    colors: Colors.dark,
    fonts: Fonts
};

let iOSTheme = {
    light: lightTheme,
    dark: darkTheme
};

export default iOSTheme;