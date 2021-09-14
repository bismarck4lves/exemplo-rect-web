import React, { FC } from "react";
import TreeColinsExemple from "../containers/TreeColinsExemple";
import Sidebar from "../componets/Sidebar";
import TimeLine from "../componets/TimeLine";
import LoremIpsum from "../componets/LoremIpsum";

interface IProps { };

const TreeColunsPageExemple: FC<IProps> = (props) => (
    <TreeColinsExemple
        left={<Sidebar />}
        center={<TimeLine />}
        rigth={<LoremIpsum />}
    />
);

export default TreeColunsPageExemple;