import styled from 'styled-components';
import colors from '@/styles/colors';


export const SidebarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width:100%;
    padding:10px;
    border-bottom: 1px solid ${colors.black};
`;

export const SidebarIdentidade = styled.div`
    display:flex;
`;

export const SidebarMenu = styled.div`
    padding:10px;
`;

export const SidebarTitle = styled.span`
    font-weight:600;
    margin-left: 20px;
    font-size:18px;
`;

export const SidebarImageLogo = styled.img`
    width:100px;
`;

export const OptionMenu = styled.div`
    cursor: pointer;
`; 