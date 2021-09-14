import React, { FC, ReactNode } from "react";
import { LeftColum, CenterColum, RigthColum, Container } from './styled';
interface IProps {
    left?: ReactNode,
    center?: ReactNode,
    rigth?: ReactNode;
};


const TreeColinsExemple: FC<IProps> = ({ left, center, rigth }) => {
    return <Container>
        <LeftColum>
            {left}
        </LeftColum>
        <CenterColum>
            {center}
        </CenterColum>
        <RigthColum>
            {rigth}
        </RigthColum>
    </Container>;
};

export default TreeColinsExemple;