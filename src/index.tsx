import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './config';
import {Routes_ } from './routes'
import process from "process"
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes_ />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)