import colors from '@/styles/colors';
import styled from 'styled-components';


export const Inpunt = styled.input`
    border: 1px solid ${props => props.color ? props.color : colors.primary};
    padding: 5px;
    border-radius: 4px;
`;

export default Inpunt