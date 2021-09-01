import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Button from './index';


test('verifica se o botão está executando onclick', () => {
    const haddleOnClique = jest.fn();
    const { getByText } = render(<Button onClick={haddleOnClique}> Enviar </Button>);
    const btnElement = getByText('Enviar');
    fireEvent.click(btnElement);
    expect(haddleOnClique).toHaveBeenCalled();
});