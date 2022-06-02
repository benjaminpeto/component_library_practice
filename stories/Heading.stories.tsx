import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from '../src/Heading';

const meta: Meta = {
  title: 'Headings/Heading',
  component: Heading,
  argTypes: {
    text: {
      defaultValue: 'Heading element',
      description:
        'You can change the text by typing in the inputfield on the right.',
    },
    fontSize: {
      control: 'select',
      options: ['xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      description:
        'Available sizes for heading element. Choose one of the 6 options.',
    },
    textColor: {
      control: 'radio',
      options: ['blue-500', 'red-300', 'green-500', 'black', 'white'],
      description: 'Choose the color of your font.',
    },
    letterSpacing: {
      control: 'radio',
      options: ['tighter', 'normal', 'widest'],
      description:
        'Letterspacing allows you to determine the space between letters.',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
