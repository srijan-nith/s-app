import { createTheme } from "@mui/material"

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

//site nav URLs
export const HOME_ = '/';


export const theme = createTheme({
  palette: {
    common: {
      black: '#231F20',
      white: '#EEEEEE',
    },
    primary: {
      main: '#CA3E47'
    },
    secondary: {
      main: '#3ECAC1'
    }
  },
 typography: {
    fontFamily: 'lato',
    fontWeightMedium: 800,
    fontWeightRegular: 500,
    fontWeightLight: 200,
    h1: {
      fontFamily: 'Playfair Display',
    },
    button: {
      textTransform: 'none',
    },
  },
})