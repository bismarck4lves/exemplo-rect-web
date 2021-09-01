import styled, { keyframes } from 'styled-components';


export interface ISpinnerStyle {
  loadding: boolean;
}

const expandMoreAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const ButtonSpinner = styled.span<ISpinnerStyle>`
  width: 20px;  
  svg{
    width: 20px;
    height: 20px;
    transition: color 0.3s ease;
    animation: 0.5s linear ${expandMoreAnimation} ${props => props.loadding ? 'infinite' : null};
  }
`;
