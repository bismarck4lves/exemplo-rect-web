import React, { ReactNode } from 'react';
import Spinner from "../../Spinner";
import { ButtonContentStyle, ChildrenStyle } from "./styles";

export interface ICardProps {
    children: ReactNode;
    loading?: boolean;
    hideTextOnLoading?: boolean;

}

const ButtonContent: React.FC<ICardProps> = ({ children, loading = false, hideTextOnLoading }) => {
    return (
        hideTextOnLoading ?

            <Spinner loadding={loading} /> :

            <ButtonContentStyle>
                <Spinner loadding={loading} />
                <ChildrenStyle>
                    {children}
                </ChildrenStyle>
            </ButtonContentStyle>
    );
};

export default ButtonContent;