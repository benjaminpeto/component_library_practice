import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from '.';

const meta: Meta = {
  title: 'Links/Link',
  component: Link,
  argTypes: {
    children: {
      defaultValue: 'Link',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};
