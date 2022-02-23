import React, {useState} from 'react';
import { Link } from 'react-router-dom'



const AddClient = () => {

    const [client, setClient] = useState({
        first_name: "",
        name:"",
        company_name: ""
       
    });
    const handleChange= (key,value)=>{
        setClient({
            ...client,
            [key]:value
        })
    }
        
    const handleSubmit=(e)=> {
        e.preventDefault();      
        fetch("http://localhost:1337/api/liste-clients", {
            method: "POST", 
            body: JSON.stringify({
            data: client
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
           
    return (
        <div className="App">
            <div>
                <h1>Enregistrer un nouveau client dans la base de données</h1>
            </div>
            
<form onSubmit={(e)=> handleSubmit(e)}>
<div>
    <label htmlFor="inputFirstName">Prénom :</label>
    <input id="inputFirstName" type="text" value={client.first_name} 
    // onChange={(e)=> handleChange("first_name", e.target.value)}
    />
</div>
<div>
    <label htmlFor="inputName">Nom :</label>
    <input id="inputName" type="text" value={client.name} 
    // onChange={(e)=> handleChange("name", e.target.value)}
    />
</div>
<div>
    <label htmlFor="inputCompany">Nom de l'entreprise :</label>
    <input id="inputCompany" type="text" value={client.company_name}
    // onChange={(e)=> handleChange("company_name", e.target.value)}
    />
</div>
<div>
<input type="submit" value="Ajouter le client" 
onChange={(e)=> handleChange( e.target.value)}/>
</div>
<div>
<button id="Home">
        <Link to="/">
              Retour à l'avis de Passage
              </Link>
            </button>
</div>

</form>
        </div>
    )
    
            
}
        
export default AddClient;