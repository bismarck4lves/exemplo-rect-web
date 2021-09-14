import React from 'react';
import TwoColumsLayout from '../containers/twoColunsExemple';
import FormularioSimples from '../componets/FormularioSimples';
import LoremIpsum from '../componets/LoremIpsum';
import AguaImagem from '@/assets/aguia.jpg';

const TwoColumsPagesExemple: React.FC = () => {
    return (
        <TwoColumsLayout
            img={AguaImagem}
            title={"Este é o meu primeiro exemplo"}
            description={<LoremIpsum />}
            recurso={<FormularioSimples />}
        />

    );
};

export default TwoColumsPagesExemple;