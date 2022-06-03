import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navigation } from '../src/Navigation';
import { Link } from '../src/Link';
import { Button } from '../src/Button';

export default {
  title: 'Navigation/Navigation',
  component: Navigation,
  subcomponents: { Link, Button },
  argTypes: {
    children: {
      defaultValue: 'Item 1',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Navigation>;

const Empty: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

const OneItem: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args}>
    <Link
      children="Item 1"
      url="#"
      variant="primary"
      onClick={() => {
        console.log('been clicked');
      }}
    ></Link>
  </Navigation>
);

const ManyItems: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args}>
    <Link
      children="Item 1"
      url="#"
      variant="primary"
      onClick={() => {
        console.log('been clicked');
      }}
    ></Link>
    <Link
      children="Item 2"
      url="#"
      variant="primary"
      onClick={() => {
        console.log('been clicked');
      }}
    ></Link>
    <Link
      children="Item 3"
      url="#"
      variant="primary"
      onClick={() => {
        console.log('has been clicked');
      }}
    ></Link>
    <Button children="CTA" variant="secondary"></Button>
  </Navigation>
);

export const Default = Empty.bind({});

export const SingleItem = OneItem.bind({});

export const MultipleItem = ManyItems.bind({});
