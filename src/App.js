import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/core/Footer';
import Home from './components/core/Home';
import MyWork from './components/pages/MyWork';
import { createTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    background: {main: "#333333"},
    primary: {main: "#246EB9"},
    secondary: {main: "#A69658" },
    third: {main: "#FDFFFC"},
    special: {main: "#75DBCD"}
  }
})

function App() {

  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element = {<Home/>} />
            <Route path="mywork" element= {<MyWork title="My Work" dark={true}/>} />
          </Route>
        </Routes>
        <Footer title="Contact Me" dark={false}/>
      </BrowserRouter>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
