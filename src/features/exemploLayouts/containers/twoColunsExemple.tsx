import React, { ReactNode } from 'react';
import {
    Left,
    Title,
    Right,
    Container,
    Description,
    ImagemGrande
} from './styled';
import Card from "@/components/Card";

interface TwoColumsLayoutProps {
    img?: string;
    title?: string;
    recurso?: ReactNode;
    description?: string | ReactNode;
}

const TwoColumsLayout: React.FC<TwoColumsLayoutProps> = ({
    img,
    title,
    recurso,
    description,
}) => (
    <Container>
        <Left>
            <Card>
                <Title>
                    {title}
                </Title>
                <ImagemGrande src={img} alt={title} />
                <Description>
                    {description}
                </Description>
            </Card>
        </Left>
        <Right>
            <Card>
                {recurso}
            </Card>
        </Right>
    </Container>
);

export default TwoColumsLayout;