// Generated with util/create-component.js
import React from "react";
import Button from "./Button";
import { Story } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: "Button",
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />
export const Default = Template.bind({});

Default.args = {
    label: "btestear",
    onClick: () => console.log("clicked")
  };

