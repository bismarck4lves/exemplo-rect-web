import React, { useCallback, useState } from 'react';
import { useAuthContext } from '../../contexts/auth';
import Button from "@/components/Button";
import Inpunt from '@/components/Input';
import { Actions, Spacer } from "@/components/Actions";
import AuthContainder from "../../containers/authContainer";


interface FormState {
    username: string;
    password: string;
}

const SingIn: React.FC = () => {

    const [, { loadding, dispatchLogin }] = useAuthContext();

    const [formState, setFormState] = useState<FormState>({
        username: '',
        password: '',
    });

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            // Prevents React from resetting its properties:
            event.persist();
            setFormState(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }));
        },

        [],
    );

    const handleSubmit = useCallback(
        async (event: React.SyntheticEvent) => {
            event.preventDefault();
            await dispatchLogin(formState);
        },
        [formState, dispatchLogin],
    );

    return (
        <AuthContainder>
            <Inpunt
                color="blue"
                name="username"
                onChange={handleInputChange}
            />
            <Inpunt
                color="blue"
                name="password"
                type="password"
                onChange={handleInputChange}
            />
            <Actions>
                <Button
                    color="blue"
                    text
                >
                    Criar conta
                </Button>
                <Spacer />
                <Button
                    color="blue"
                    outline
                    onClick={handleSubmit}
                    loading={loadding}
                >
                    Entrar
                </Button>
            </Actions>
        </AuthContainder>
    );
};
export default SingIn;