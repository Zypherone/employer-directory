import React from 'react';
import './styles/App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
/*

import Main from "./components/Main";
import Footer from "./components/Footer";
*/



function App() {
  return (
    <div id="App">
      <Wrapper>
        
        <Header />

        <Main />

        <Footer />

      </Wrapper>
    </div>
  );
}

export default App;
