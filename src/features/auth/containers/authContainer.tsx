import React from 'react';
import { ContainerCenterXY, ContainerAuth } from "./styles";


const AuthContainer: React.FC = ({ children }) => {
    return (

        <ContainerCenterXY>
            <ContainerAuth>
                {children}
            </ContainerAuth>
        </ContainerCenterXY>
    );
};

export default AuthContainer;

