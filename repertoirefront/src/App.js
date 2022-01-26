import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Accueil from './components/Accueil';
import NotFound from './NotFound';
import Personne from  './components/Personne';
import Create from './components/Create';

export default function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Accueil/>}/>
        <Route path ='/repertoire/edit/personne' element={<Create/>}/>
        <Route path ='/repertoire/personne/:id' element={<Personne/>}/>
        <Route path ="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  ) ;
}
