import React, { useEffect } from "react";
import SideBard from "@/components/SideBar";

interface DefaulLayoutProps {
    title?: string;
    renderTitle?: () => JSX.Element;
    children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaulLayoutProps> = ({ children, title }) => {

    useEffect(()=> {
        const project  = require('../../../package.json').name
        document.title = `${project} | ${title}`
    }, [title])

    return (
        <>
            <SideBard title={title} />
            {children}
        </>
    );

};

export default DefaultLayout;