import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/core/Footer';
import Home from './components/core/Home';
import MyWork from './components/pages/MyWork';

function App() {

  return (
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
  );
}


export default App;
