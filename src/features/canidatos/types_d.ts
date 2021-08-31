import { ReactNode } from "react";

export interface ICandidato {
    id: number;
    cellphone: string;
    city: string;
    code: string;
    cpf: string;
    curso: string;
    curso_id: string;
    email: string;
    hash: string;
}


export type ICandidatoContextData = {
    candidatos: ICandidato[];
    candidatosSelecionados: ICandidato[];
    getCandidatosAtivos: () => void;
    removeCandidato: (id: number) => void;
    addSelectedCandidato: (instance: ICandidato) => void;
};

export interface ICandidatoProps {
    children: ReactNode;
}