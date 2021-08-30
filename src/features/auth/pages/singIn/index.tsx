import React, { useCallback, useState } from 'react';
import { useAuthContext } from '../../contexts/auth';

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
        <div className="login-container">
            <input
                name="username"
                onChange={handleInputChange}
            />

            <input
                name="password"
                type="password"
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}
            > Entrar </button>
        </div>
    );
};

export default SingIn;