import React, { useEffect, useState } from "react";
import { getCandidatos } from "./services/candidatos-service";
import DefaultLayout from "@/containers/DefaultLayout";

interface ICandidato {
    cellphone: string;
    city: string;
    code: string;
    cpf: string;
    curso: string;
    curso_id: string;
    email: string;
    hash: string;

}

const Candidatos: React.FC = () => {

    const [candidatosState, setCandidatosState] = useState<ICandidato[]>([]);

    const initializeData = () => {
        getCandidatos().then(res => {
            if (res) setCandidatosState(res);
        });
    };

    useEffect(() => initializeData(), []);

    return (
        <>
            <DefaultLayout>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Telefone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {candidatosState.map(item =>
                            <>
                                <tr>
                                    <td> {item.email}</td>
                                    <td> {item.city}</td>

                                    <td> {item.cellphone}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>]
            </DefaultLayout>
        </>
    );
};

export default Candidatos;


