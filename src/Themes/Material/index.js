import Colors from './Colors';
import Fonts from './Fonts';

const defaultFonts = 'Roboto';
const lightTheme = {
    name: "MATERIAL-LIGHT",
    colors: Colors.light,
    fonts: Fonts
};

const darkTheme = {
    name: "MATERIAL-DARK",
    colors: Colors.dark,
    fonts: Fonts
};

let MaterialTheme = {
    light: lightTheme,
    dark: darkTheme
};

export default MaterialTheme;