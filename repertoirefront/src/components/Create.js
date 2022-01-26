import { Button, Container, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Service from '../Service';

export default function Create() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const personne = {nom,prenom,email};
    const home = useNavigate();

    console.log("Personne : ", personne);
    
    const savePersonne = (e) => {
        e.preventDefault();
        Service.savePersonne(personne)
        .then(response =>{
            // console.log("Personne", response.data);
            home('/');
        })
        .catch(error => {
            console.log("Oups, il y erreurs : ", error);
        }) 
    }

  return (
      <React.Fragment>
          <Container>
            <h1> Create a person </h1> 
            <Box component="form">
                <div>
                    <TextField
                    id="Nom"
                    label="Nom"
                    placeholder='Mettre le nom de la personne'
                    onChange={(e)=>setNom(e.target.value)}
                    />
                    <TextField
                    id="Prenom"
                    label="Prenom"
                    placeholder='Mettre le prenom de la personne'
                    onChange={(e)=>setPrenom(e.target.value)}
                    />
                    <TextField
                    id="Email"
                    label="Email"
                    placeholder='Mettre Email de la personne'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <hr/>
                    <Button variant="outlined" onClick={(e)=>savePersonne(e)}> Sauvegarder </Button>
                </div>
            </Box>
            <hr/>
            <Link href={'/'}> Retour à l'acceuil </Link>
          </Container>
          
      </React.Fragment>
  );

}
