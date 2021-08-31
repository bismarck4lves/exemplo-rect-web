
import React, { useEffect, useState } from "react";
import { getCandidatos } from "../services/candidatos-service";
import { ICandidatoProps, ICandidato, ICandidatoContextData } from "../types_d";

export const CandidatosContext = React.createContext<ICandidatoContextData>({} as ICandidatoContextData);

const CandidatosProvider: React.FC<ICandidatoProps> = ({ children }: ICandidatoProps) => {

    const [candidatos, setCandidatosState] = useState<ICandidato[]>([] as ICandidato[]);
    const [candidatosSelecionados, setSelectedCandidatos] = useState<ICandidato[]>([] as ICandidato[]);

    const getCandidatosAtivos = () => {
        getCandidatos().then(res => {
            if (res) setCandidatosState(res);
        });
    };

    const addSelectedCandidato = (instance:ICandidato) => {
        setSelectedCandidatos([...candidatosSelecionados, instance])
    }

    const removeCandidato = (id:number) => { 
        const index = candidatosSelecionados.findIndex(item => item.id === id)
        const novoArr = candidatosSelecionados.splice(index, 1);
        setSelectedCandidatos(novoArr)
    }

    useEffect(() => getCandidatosAtivos(), []);

    return (<>
        <CandidatosContext.Provider
            value={{
                candidatos,
                candidatosSelecionados,
                getCandidatosAtivos,
                addSelectedCandidato,
                removeCandidato
            }}
        >
            {children}
        </CandidatosContext.Provider>
    </>);
};


export default CandidatosProvider;
