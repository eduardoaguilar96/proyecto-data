import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { FileUpload } from 'primereact/fileupload';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';



function App() {
 
const chooseOptions = {label: 'Cargar imagen', icon: 'pi pi-fw pi-plus'};
const uploadOptions = {label: 'Uplaod', icon: 'pi pi-upload', className: 'p-button-success'};
const cancelOptions = {label: 'Cancel', icon: 'pi pi-times', className: 'p-button-danger'};

const myUploader = (event) => {
  //event.files == files to upload
console.log(event)
}
 
  return (
    <div className="App">
    <div className='contenedor'>
      <h1>Lenguaje de signos</h1>
      
<FileUpload name="demo[]" url="./upload" chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions}  uploadHandler={myUploader}/>
 
      <div className='resultado'>
        <h1>Resultado</h1>
      </div>
    </div>
    </div>
  );

}

export default App;
