import styled from 'styled-components';

interface ICardStyle {
    width: string;
    height: string;
    maxWidth: string;
    maxheight: string;
    minWidth: string;
    minheight: string;
}

export const CardStyle = styled.div<ICardStyle>`
    border:1px solid #e4e4e4;
    border-radius: 4px;
    padding: 10px;
    width:${props => props.width ? props.width : null};
    height: ${props => props.height ? props.height : null};
    max-width: ${props => props.maxWidth ? props.maxWidth : null};
    max-height: ${props => props.maxheight ? props.maxheight : null};
    min-width: ${props => props.minWidth ? props.minWidth : null};
    min-height: ${props => props.minheight ? props.minheight : null};
    -webkit-box-shadow: 1px 5px 13px -1px rgba(127,127,127,0.34); 
    box-shadow: 1px 5px 13px -1px rgba(127,127,127,0.34);
`;