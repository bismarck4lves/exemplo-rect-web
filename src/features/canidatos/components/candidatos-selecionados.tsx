import React, { useContext } from "react";
import { CandidatosContext } from "../contexts/candidatos";


const CandidatosSelecionados: React.FC = () => {

    const { candidatosSelecionados } = useContext(CandidatosContext);
    return (
        <>
            {candidatosSelecionados.map(
                item => (<div id={String(item.id)}> {item.email}</div>)
            )}
        </>
    );
};

export default CandidatosSelecionados;