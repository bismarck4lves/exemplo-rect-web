import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card, { ICardProps } from './index';

export default {
  component: Card,
  title: 'Components',
} as Meta;

const Template: Story<ICardProps> = (args) => <Card {...args} />;

export const CardComponents = Template.bind({});

CardComponents.args = {
  width: '600px',
  children: 'Nosso texto'
};