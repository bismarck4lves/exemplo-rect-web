import React from 'react';
import { ButtonDefault, ButtonOutlined, ButtonText } from './styles';
import ButtonContent from './components/button-content';


export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    textColor?: string;
    outline?: boolean;
    text?: boolean;
    loading?: boolean;
    hideTextOnLoading?: boolean;
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
    hideTextOnLoading = false,
    ...rest
}: IButtonProps) => {
    if (outline)
        return (
            <ButtonOutlined color={color} {...rest} className="button-outlined" >
                <ButtonContent loading={loading} hideTextOnLoading={hideTextOnLoading}>
                    {children}
                </ButtonContent>
            </ButtonOutlined>
        );
    if (text)
        return (
            <ButtonText color={color}  {...rest} className="button-text">
                <ButtonContent loading={loading} hideTextOnLoading={hideTextOnLoading}>
                    {children}
                </ButtonContent>
            </ButtonText>
        );
    return (
        <ButtonDefault color={color} {...rest} className="button-default">
            <ButtonContent loading={loading} hideTextOnLoading={hideTextOnLoading}>
                {children}
            </ButtonContent>
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