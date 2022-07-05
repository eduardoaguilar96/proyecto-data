import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import { FileUpload } from "primereact/fileupload";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";


function App() {
  const [prediction, setPrediction] = useState("");
  const myUploader = (event) => {
    
    const formData = new FormData();
    formData.append('image', event.files[0])
    //event.files == files to upload
  
    fetch('http://dynucleus.com:8444/api/v1/predict', {
      method: "POST",
      body: formData,

    }).then(response => response.json())
      .then(json => setPrediction(json.prediction))
  }

  return (
    <div className="App">
      <div className="contenedor">
        <h1>Lenguaje de signos</h1>
        <FileUpload
          name="demo[]"
          url="./upload"
          customUpload
          uploadHandler={myUploader}
        />
        <div className="resultado">
          <h1>Resultado</h1>
          {prediction}
        </div>
      </div>
    </div>
  );
}

export default App;