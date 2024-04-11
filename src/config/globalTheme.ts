import { createTheme } from "@mui/material";
import { headingFontFamily, lightGrayishCyanBackground } from "../styles/variables";


const theme = createTheme({
    typography: {
      fontFamily: [
        headingFontFamily, 
        'Arial', // Puedes agregar otras fuentes de respaldo aquí
        'sans-serif',
      ].join(','),
    },
    palette: {
      background: {
        default: lightGrayishCyanBackground, // Color de fondo personalizado
      },
    },
});

export default theme;