import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import HelloWorldApp from './react-native-app';
//import App from './App';
import Project from './to-do-list';
//import Ajax from './Ajax';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>
);

reportWebVitals();

