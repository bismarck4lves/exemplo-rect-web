import React from 'react';
import { ButtonDefault, ButtonOutlined, ButtonText } from './styles';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    textColor?: string;
    outline?: boolean;
    text?: boolean;
    loading?: boolean;
    hasError?: boolean;
    actived?: boolean;
}

const AppButton: React.FC<ButtonProps> = ({
    color = 'primary',
    outline = false,
    text = false,
    loading = false,
    hasError = false,
    children,
    disabled,
    actived,
    ...rest
}: ButtonProps) => {

    if (outline)
        return (
            <ButtonOutlined color={color}>  {children}  </ButtonOutlined>
        );

    if (text)
        return (
            <ButtonText color={color}> {children}  </ButtonText>
        );

    return (
        <ButtonDefault color={color}>  {children} </ButtonDefault>
    );

};

AppButton.defaultProps = {
    loading: false,
    hasError: false,
    actived: false,
    outline: false,
    text: false,
    color: 'primary',
};

export default AppButton;