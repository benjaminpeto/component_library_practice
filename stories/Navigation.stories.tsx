import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navigation } from '../src/Navigation';
import { Link } from '../src/Link';

export default {
  title: 'Navigation/Navigation',
  component: Navigation,
  argTypes: {
    children: {
      defaultValue: 'Primary',
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
    <Link children url="#" variant="primary" onClick={() => {}}></Link>
  </Navigation>
);

// template.bind... ??
