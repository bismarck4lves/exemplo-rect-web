import colors from '../../styles/colors';
import styled from 'styled-components';


const defineColor = (color?: string): string => {
    return (
        color ?
            colors.hasOwnProperty(color) ? colors[color] : color :
            colors.primary
    );
};


interface IButtonProps {
    color?: string;
    block?: boolean;
}
const baseButton = styled.button<IButtonProps>`
    padding:  5px 20px 5px 20px ;
    border-radius:4px;
    cursor: pointer;
    align-items: center;
    display:flex;
`;

export const ButtonDefault = styled(baseButton)`
    width:${props => props.block ? '100%' : null};
    color: ${colors.white};
    background-color: ${props => defineColor(props.color)};
    
`;

export const ButtonOutlined = styled(baseButton)`
    color:${props => defineColor(props.color)};
    border: 1px solid ${props => defineColor(props.color)};
    background-color: transparent;
`;

export const ButtonText = styled(baseButton)`
    color:${props => defineColor(props.color)};
    background-color: transparent;
    border:none
`;