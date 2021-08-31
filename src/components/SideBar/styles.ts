import styled from 'styled-components';


export const SidebarContainer = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SidebarIdentidade = styled.div`
    display:flex;
`;

export const SidebarMenu = styled.div`
    padding:10px;
`;

export const SidebarTitle = styled.span`
    font-weight: 900;
    font-size: 20px;
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
`;

export const SidebarImageLogo = styled.img`
    width:40px;
`;

export const OptionMenu = styled.div`
    cursor: pointer;
`;