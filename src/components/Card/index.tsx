import React from "react";
import { ReactNode } from "react";
import { CardStyle } from "./styles";

export interface ICardProps {
    children: ReactNode;
    width: string;
    height: string;
    maxWidth: string;
    maxheight: string;
    minWidth: string;
    minheight: string;
}

const Card: React.FC<ICardProps> = ({
    children,
    width,
    height,
    maxWidth,
    maxheight,
    minWidth,
    minheight,
    ...rest
}) => (
    <CardStyle
        width={width}
        height={height}
        maxWidth={maxWidth}
        maxheight={maxheight}
        minWidth={minWidth}
        minheight={minheight}
        {...rest}
    >
        {children}
    </CardStyle>
);
export default Card;