import React, { LinkHTMLAttributes } from 'react';
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
      defaultValue: 'Navigation Bar',
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
      {...args}
      children="Item 1"
      url=""
      variant="primary"
      onClick={() => {
        console.log('been clicked');
      }}
    />
  </Navigation>
);

const ManyItems: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args}>
    <Link
      {...args}
      children="Item 1"
      url=""
      variant="primary"
      onClick={() => {
        console.log('has been clicked');
      }}
    />
    <Link
      {...args}
      children="Item 2"
      url=""
      variant="primary"
      onClick={() => {
        console.log('has been clicked');
      }}
    />
    <Link
      {...args}
      children="Item 3"
      url=""
      variant="primary"
      onClick={() => {
        console.log('has been clicked');
      }}
    />
    <Button children="CTA" variant="secondary"></Button>
  </Navigation>
);

export const EmptyNav = Empty.bind({});

export const SingleItem = OneItem.bind({});

export const MultipleItem = ManyItems.bind({});

// const NavTemplate: ComponentStory<typeof Navigation> = (args) => {
//   const { NavProps } = args;
//   return (
//     <Navigation {...args}>
//       {NavProps.map((item) => (
//         <Link {...item} />
//       ))}
//     </Navigation>
//   );
// };

// export const Empty = NavTemplate.bind({});
// Empty.args = { items: [] };

// export const OneItem = NavTemplate.bind({});
// OneItem.args = {
//   items: [
//     {
//       ...Default.args,
//     },
//   ],
// };
