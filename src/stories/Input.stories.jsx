import React from 'react';
import {Input} from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    borderLine: { control: 'color' }
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;



export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'small',
};

