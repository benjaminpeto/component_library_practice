import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navigation } from '.';
import { Primary } from '../Button/Button.stories';

export default {
  title: 'Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const NavigationWithButton = Template.bind({});
NavigationWithButton.args = {
  children: <Primary {...Primary.args} />,
};
