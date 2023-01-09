import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import Footer from './pages/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <div id = "appwrapper">
      <App/>
    </div>  
    <Footer id="footer"/>
  </React.StrictMode>,
  document.getElementById('root')
);