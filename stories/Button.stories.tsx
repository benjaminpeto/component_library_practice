import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src';

const meta: Meta = {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'More info',
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

Secondary.args = {
  children: 'Shop',
  variant: 'secondary',
};
