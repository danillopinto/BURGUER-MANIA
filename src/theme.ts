import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(10, 10, 10)', //Preto
            //rgb(0, 173, 111) Verde
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
                 
            // '"Helvetica Neue"',
            // '-apple-system',
               'Saira',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;