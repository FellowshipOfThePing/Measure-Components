import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TutorialButton, TutorialButtonProps } from '../src';

const meta: Meta = {
  title: 'TutorialButton',
  component: TutorialButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TutorialButtonProps> = (args) => <TutorialButton {...args} />;

export const SCTutorialButton = Template.bind({});

SCTutorialButton.args = { text: 'Button' };