import React from 'react';
import { Story, Meta } from '@storybook/react';
import Spinner, { ISpinnerProps } from './index';

export default {
    component: Spinner,
    title: 'Components',
} as Meta;

const Template: Story<ISpinnerProps> = (args) => <Spinner {...args} />;

export const spinnerComponent = Template.bind({});

spinnerComponent.args = {
    loadding: false,
};