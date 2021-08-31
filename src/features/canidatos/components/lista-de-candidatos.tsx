import React, { useContext } from "react";
import { CandidatosContext } from "../contexts/candidatos";


const ListaDeCandiatos: React.FC = () => {

    const { candidatos, addSelectedCandidato } = useContext(CandidatosContext);
    return (
        <>
            {candidatos.map(item => (
                    <div id={String(item.id)}>
                        {item.email}
                        <button onClick={() => addSelectedCandidato(item)}>
                            Adicione
                        </button>
                    </div>
                ))
            }
        </>
    );
};
export default ListaDeCandiatos;