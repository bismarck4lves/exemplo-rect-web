import React from "react";
import ListaDeCandiatos from "./components/lista-de-candidatos";
import CandidatosProvider from "./contexts/candidatos";
import CandidatosSelecionados from "./components/candidatos-selecionados";
import DefaultLayout from "@/containers/DefaultLayout";

const Candidatos: React.FC = () => {
    return (
        <DefaultLayout title="Candidatos">
            <CandidatosProvider>
                <ListaDeCandiatos />
                <h3> Candidatos selecionados </h3>
                <CandidatosSelecionados />
            </CandidatosProvider>
        </DefaultLayout>
    );
};
export default Candidatos;


