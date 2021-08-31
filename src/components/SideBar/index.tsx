import React from "react";
import {
    SidebarContainer,
    SidebarIdentidade,
    SidebarMenu,
    SidebarTitle,
    SidebarImageLogo,
    OptionMenu
} from './styles';
import LogOutDialog from "./components/logout-dialog";

interface ISideBarProps {
    title?: string;
}

const SideBard: React.FC<ISideBarProps> = ({ title }) => {

    const logoPath = "https://patioalcantara.com.br/wp-content/uploads/2020/11/logo-leader-transparente.png";

    return (
        <SidebarContainer className="sidebar-container">
            <SidebarIdentidade className="sidebar-identidade">
                <SidebarImageLogo alt="logo" src={logoPath} className="sidebar-logo" />
                <SidebarTitle className="sidebar-title">
                    {title}
                </SidebarTitle>
            </SidebarIdentidade>
            <SidebarMenu className="sidebar-menu">
                <OptionMenu>
                    <LogOutDialog />
                </OptionMenu>
            </SidebarMenu>
        </SidebarContainer>
    );
};
export default SideBard;