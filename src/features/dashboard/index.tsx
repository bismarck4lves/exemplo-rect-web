import React from "react";
import { useHistory } from "react-router-dom";
import {screens} from '@/routes/index'


const Logged: React.FC = () => {

    const  history = useHistory();
    
    return (
        <button onClick={()=> history.push(screens.private.candidatos)}>
            
            Ir para Candidatos

        </button>
    );
};

export default Logged;