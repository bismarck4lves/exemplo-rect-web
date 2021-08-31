import React from "react";
import ListaDeCandiatos from "./components/lista-de-candidatos";
import CandidatosProvider from "./contexts/candidatos";
import CandidatosSelecionados from "./components/candidatos-selecionados";


const Candidatos: React.FC = () => {
    return (
        <CandidatosProvider>
            <ListaDeCandiatos />
            <h3> Candidatos selecionados </h3>
            <CandidatosSelecionados />
        </CandidatosProvider>
    );
};
export default Candidatos;


