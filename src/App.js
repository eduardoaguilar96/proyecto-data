import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { FileUpload } from 'primereact/fileupload';


function App() {
 
  return (
    <div className="App">
    <div className='contenedor'>
      <h1>Lenguaje de signos</h1>
      <FileUpload name="demo" url="./upload"></FileUpload>
      <div className='resultado'>
        <h1>Resultado</h1>
      </div>
    </div>
    </div>
  );
}

export default App;
