import React, {useState} from 'react';
import { Link } from 'react-router-dom'



const AddClient = () => {

    const [client, setClient] = useState({
        
        name:""
       
       
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
    <label htmlFor="inputName">Nom : </label>
    <input id="inputName" type="text" value={client.name} 
    
    />
</div>



<div>
<input type="submit" value="Ajouter le client" 
onChange={(e)=> handleChange( e.target.value)}/>
</div>
<div>
<button id="Home">
        <Link to="/" className='link'>
              Retour à l'avis de Passage
              </Link>
            </button>
</div>

</form>
        </div>
    )
    
            
}
        
export default AddClient;