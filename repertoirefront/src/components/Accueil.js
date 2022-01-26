import React, {useEffect,useRef,useState} from 'react';
import Service from '../Service';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Personne from './Personne';
import { useNavigate } from 'react-router-dom';


export default function Accueil() {

    const [personnes, setPersonnes] = useState([]);
    const home = useNavigate();
    
    useEffect(() => {
        init();
    },[]);

    
    const init = () => {
        Service.getAll()
        .then(response => {
            setPersonnes(response.data);
        })
        .catch(error => {
            console.log("Oups , il y une erreur", error);
        })
    }

    const deletePersonne = (id) => {
        Service.deleteById(parseInt(id))
        .then( response =>{
            console.log("Personne supprimé du répertoire : " ,response.data)
        })
        .catch(error=>{
            console.log("Oups il y une erreur : ", error);
        })
    }

  return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">   
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell > Nom </TableCell>
                            <TableCell > Prenom </TableCell>
                            <TableCell > Email </TableCell>
                            <TableCell > Actions </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {personnes.map((personne) => (
                        <TableRow
                        key={personne.id}
                        >
                            <TableCell >{personne.nom}</TableCell>
                            <TableCell >{personne.prenom}</TableCell>
                            <TableCell >{personne.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" href={`/repertoire/personne/${personne.id}`}  style={{backgroundColor: "#3ECEE8"}}> Details </Button>
                                <Button variant="contained" style={{backgroundColor: "#E87D37"}} onClick={(e)=>deletePersonne(personne.id)}> Delete </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" href={`/repertoire/edit/personne`}  style={{backgroundColor: "#3ECEE8"}}> Create a new personne </Button>
        </Container>
    </React.Fragment>
    );
}
