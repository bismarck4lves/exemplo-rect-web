import React, { ReactNode } from 'react';
import { Container, Left, Right, Title, Description, ImagemGrande } from './styled';


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
            <Title>
                {title}
            </Title>
            <ImagemGrande src={img} alt={title} />
            <Description>
                {description}
            </Description>
        </Left>
        <Right>
            {recurso}
        </Right>
    </Container>
);

export default TwoColumsLayout;