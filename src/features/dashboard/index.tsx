import React from "react";
import { useHistory } from "react-router-dom";
import { screens } from '@/routes/index';
import DefaultLaytou from '@/containers/DefaultLayout';

const Dashboard: React.FC = () => {

    const history = useHistory();

    return (
        <DefaultLaytou title="Dashboard">
            <button onClick={() => history.push(screens.private.candidatos)}>
                Ir para Candidatos
            </button>
        </DefaultLaytou>
    );
};

export default Dashboard;