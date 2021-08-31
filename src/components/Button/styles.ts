import colors from '@/styles/colors';
import styled from 'styled-components';


const baseButton = styled.button`
    padding:  5px 20px 5px 20px ;
    border-radius:4px;
    cursor: pointer;
`;

export const ButtonDefault = styled(baseButton)`
    color: ${colors.white};
    background-color: ${props => props.color ? props.color : colors.primary};
`;

export const ButtonOutlined = styled(baseButton)`
    color:${props => props.color ? props.color : colors.primary};
    border: 1px solid ${props => props.color ? props.color : colors.primary};
    background-color: transparent;
`;

export const ButtonText = styled(baseButton)`
    color:${props => props.color ? props.color : colors.primary};
    background-color: transparent;
    border:none
`;