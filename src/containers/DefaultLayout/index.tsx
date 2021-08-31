import React from "react";
import SideBard from "@/components/SideBar";

interface DefaulLayoutProps {
    title?: string;
    renderTitle?: () => JSX.Element;
    children?: React.ReactNode;
}

const DefaultLaytou: React.FC<DefaulLayoutProps> = ({ children, title }) => {

    return (
        <>
            <SideBard title={title} />
            {children}
        </>
    );

};

export default DefaultLaytou;