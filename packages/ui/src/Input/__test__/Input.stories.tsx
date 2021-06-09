import { IconButton } from '@material-ui/core';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Input } from '../Input';

const Template: Story<InputProps> = args => <Input {...args} />;

export default {
  title: 'Component/Input/EnInput',
  component: Input,
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
    },
    size: {
      name: 'Size',
      defaultValue: 'large',
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

export const Standard = Template.bind({});

Standard.args = {
  label: 'Label',
};

export const Error = Template.bind({});

Error.args = {
  label: 'Some field',
  error: true,
  helperText: 'Helper text',
};

export const Prefix = Template.bind({});

Prefix.args = {
  label: 'Input field with prefix',
  prefixElement: (
    <IconButton>
      <EyesOutline />
    </IconButton>
  ),
};

export const Suffix = Template.bind({});

Suffix.args = {
  label: 'Password',
  suffixElement: (
    <IconButton>
      <EyesOutline />
    </IconButton>
  ),
};
