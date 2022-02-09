import React, {useState,useEffect} from 'react';
import{ init } from '@emailjs/browser';
import { Button, Container, Link, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import Service from '../Service';
import NotFound from '../NotFound';


export default function Personne() {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const [nomInit, setNomInit] = useState('');
  const [prenomInit, setPrenomInit] = useState('');
  const [emailInit, setEmailInit] = useState('');
  const home = useNavigate();
  const {id} = useParams();
  const idp = Number(id);

  const personne = {idp,nom,prenom,email};
  // Pas besoin
  // const personneUpdated = {nomUpdated, prenomUpdated, idp};

  // Email sender
  const initMail = init("user_a1s0cCU5k8J8JyzBph2aM");

  useEffect(() => {
    getPersonne(idp);
  }, [idp]);
  
  const getPersonne = () => {
    Service.getById(idp)
    .then(response =>{
      setNomInit(response.data.nom);
      setPrenomInit(response.data.prenom);
      setEmailInit(response.data.email);
    })
    .catch(error => {
      console.log("There is a error when personne details (Service.getById())",error);
    })
  }

  const updatePersonne = (e) => {
    if(idp){
      Service.editById(idp,personne)
      .then(
        console.log("Personne updated to : ", personne) ,
        home('/') 
      )
      .catch(error => {
        console.log("Update function doesn't work : ",error);
      })
    }
    else{
      return (
        <NotFound/>
      )
    }
  }

  // Fonctionnalité Mail.


  return (
    <React.Fragment>
    <Container>
      <h1> Update a Personne </h1> 
      <Box component="form">
          < div>
              <p key={idp}></p>
              <TextField
              id="Nom"
              label={nomInit}
              value={nom}
              placeholder='Nom de la personne'
              onChange = {(e)=>setNom(e.target.value)}
              />
               <TextField
              id="Prenom"
              label={prenomInit}
              value={prenom}
              placeholder='Prenom de la personne'
              onChange = {(e)=>setPrenom(e.target.value)}
              />
              <TextField
              id="Email"
              label={emailInit}
              value={email}
              placeholder='Email de la personne'
              onChange = {(e)=>setEmail(e.target.value)}
              />
              <hr/>
              <Button variant="outlined" onClick={((e)=>{updatePersonne(idp,personne)})} > Sauvegarder </Button>
            </div>  
      </Box>  
      <hr/>
      <Box>
        <p> {nomInit} , {prenomInit}, {emailInit}</p>
      </Box>
      <Link href={'/'}> Retour à l'acceuil </Link>
    </Container>  
  </React.Fragment>
  );

}
