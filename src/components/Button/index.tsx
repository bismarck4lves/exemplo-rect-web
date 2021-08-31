import React from 'react';
import { ButtonDefault, ButtonOutlined, ButtonText } from './styles';
import Spinner from "../Spinner";


export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    textColor?: string;
    outline?: boolean;
    text?: boolean;
    loading?: boolean;
    hasError?: boolean;
    actived?: boolean;
}

const Button: React.FC<IButtonProps> = ({
    color = 'primary',
    outline = false,
    text = false,
    loading = false,
    hasError = false,
    children,
    disabled = false,
    actived = false,
    ...rest
}: IButtonProps) => {
    if (outline)
        return (
            <ButtonOutlined color={color} {...rest}>
                {loading ? <Spinner loadding={loading} /> : children}
            </ButtonOutlined>
        );

    if (text)
        return (
            <ButtonText color={color} {...rest}>
                {loading ? <Spinner loadding={loading} /> : children}
            </ButtonText>
        );
    return (
        <ButtonDefault color={color} {...rest}>
            {loading ? <Spinner loadding={loading} /> : children}
        </ButtonDefault>
    );
};

Button.defaultProps = {
    loading: false,
    hasError: false,
    actived: false,
    outline: false,
    text: false,
    color: 'primary',
};

export default Button;