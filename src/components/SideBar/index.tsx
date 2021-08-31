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

export interface ISideBarProps {
    title?: string;
}

const SideBard: React.FC<ISideBarProps> = ({ title }) => {

    const logoPath = "https://images.theconversation.com/files/93617/original/image-20150902-6714-163lw5t.png?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip";

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