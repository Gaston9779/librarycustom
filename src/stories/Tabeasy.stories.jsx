import React from 'react';
import { Tabeasy } from './Tabeasy';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Tabeasy',
  component: Tabeasy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tabeasy {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  colorText: 'white',
};


export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  size:'large'
};

