import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, {IButtonProps } from './index';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const buttonComponent = Template.bind({});

buttonComponent.args = {
    color: 'primary',
    outline: false,
    text: false,
    loading: false,
    hasError: false,
    children: 'Enviar',
    disabled: false,
    actived: false,
};