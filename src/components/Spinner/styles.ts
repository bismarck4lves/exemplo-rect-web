
import styled, { keyframes } from 'styled-components';

const expandMoreAnimation = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const ButtonSpinner = styled.span<{ loadding: boolean; }>`
  svg{
    margin-left: 8px;
    width: 20px;
    height: 20px;
    transition: color 0.3s ease;
    animation: 0.5s linear ${expandMoreAnimation} infinite;
  }
`;
