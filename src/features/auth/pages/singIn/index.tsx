import React, { useCallback, useState } from 'react';
import { useAuthContext } from '../../contexts/auth';
import AppButton from "@/components/appButton";
import { AppInpunt } from '@/components/appInput';
import { AppSpacer } from "@/components/appSpacer";
import { AppActions } from "@/components/appActions";
import AuthContainder from "../../containers/authContainer";

interface FormState {
    username: string;
    password: string;
}

const SingIn: React.FC = () => {

    const [, { dispatchLogin }] = useAuthContext();

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

            <AppInpunt
                color="blue"
                name="username"
                onChange={handleInputChange}
            />
           
            <AppInpunt
                color="blue"
                name="password"
                type="password"
                onChange={handleInputChange}
            />

            <AppActions>

                <AppButton
                    color="blue"
                    text
                    onClick={handleSubmit}
                >
                    Criar conta
                </AppButton>

                <AppSpacer />

                <AppButton
                    color="blue"
                    outline
                    onClick={handleSubmit}
                >
                    Entrar
                </AppButton>

            </AppActions>
        </AuthContainder>
    );
};

export default SingIn;