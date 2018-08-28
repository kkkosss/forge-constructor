import React from 'react';
import ReactDOM from "react-dom";
import Header from'./components/Header'
import Footer from './components/Footer'
import '../css/index.scss'

ReactDOM.render(
  <div>
    <Header />
    <Footer/>
  </div>
  , 
  document.getElementById('fieldToShow')
);
