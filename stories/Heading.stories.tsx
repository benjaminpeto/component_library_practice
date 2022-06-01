import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from '../src/Heading';

const meta: Meta = {
  title: 'Headings/Heading',
  component: Heading,
  argTypes: {
    children: {
      defaultValue: 'Header',
    },
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
