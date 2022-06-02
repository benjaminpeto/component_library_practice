import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Primary',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

export const Danger = Template.bind({});

export const Green = Template.bind({});

Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

Danger.args = {
  children: 'Danger',
  variant: 'danger',
};

Green.args = {
  children: 'Approved',
  variant: 'green',
};
