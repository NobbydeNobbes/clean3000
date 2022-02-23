import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Client from './components/client';

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
  
  
  const [clients, setClients] = useState([]);

  
 const getClients = async () => {
   const jsonFile = await fetch("http://localhost:1337/api/liste-clients").then(response => response.json());
   
   setClients(jsonFile.data);
 }
 useEffect(() => {
   getClients();
 }, []);

 const listClients = clients.map(client =>{
   return (
     <Client 
     name={client.attributes.name}
     />
   )
 });
 
   return (
     <div className="App">
       <header className="App-header">
         <img src='./img/logo-clean3000.png' className="App-logo" alt="" />
       <h1>AVIS DE PASSAGE</h1> 
       </header>
         <div className="body">
           
         <button id="newClient">
         <Link to="/nouveauclient" className="link">
               Enregistrer nouveau client
               </Link>
             </button>
             <div className="form-group">
                             <label for="tech-select">Nom du technicien</label>
                             <div className="input-technicien">
                               <input type="text"></input>
                                 
                             </div>
                                     
                                 
             </div>                    
             
           <form>
             <label id="clientName">
               Nom entreprise/ou client : 
              <div className="select-wrapper">
                <select id="client-select">
                  {listClients}
                </select>
                </div> 
             </label>
           </form>
           <form>
             <label id="interventionDate">
               Notre technicien est intervenu pour l'entretien de la vitrerie le : 
               <input type="datetime-local"></input>
             </label>
           </form>
           <form>
             <label id="observations">
               OBSERVATIONS : 
               <input type="text"></input>
             </label>
           </form>
           <p>Merci de votre confiance</p>
         </div>
 
     </div>
   );
 }
 
 export default App;
         
                 
             

 
  
  

  
  


