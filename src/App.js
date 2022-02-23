import React, {useState, useEffect} from 'react';
import './App.css';
// import "antd/dist/antd.css";
// import { Menu, Button } from 'antd';
// import {
  
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
  
// } from '@ant-design/icons';


function App() {

  
  const [clients, setClients] = useState({
    name: "",
    first_name: "",
    company_name: ""

  });


  const getClients = async () => {
    const jsonFile = await fetch("http://localhost:1337/api/liste-clients").then(response => response.json());
    
    setClients(jsonFile.data);
  }

  
  useEffect(() => {
    getClients();
  }, []);

  
    



  return (
    <div className="App">
      <header className="App-header">
        <img src='./img/logo-clean3000.png' className="App-logo" alt="" />
      <h1>AVIS DE PASSAGE</h1> 
      </header>
        <body>
        <button id="newClient">
              Enregistrer nouveau client
            </button>
          <form>
            <label>
              Nom entreprise/ou client : 
              
        
                <input type="text"></input>
            </label>
            
          </form>
          
        </body>

    </div>
  );
}

export default App;
