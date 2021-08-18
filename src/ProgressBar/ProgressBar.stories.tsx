import React from "react";
import ProgressBar from "./ProgressBar";

export default {
    title: "ProgressBar",
    component: ProgressBar,
    argTypes: {
        percentage: {
            control: {type: 'range', min: 0, max: 100, step: 1}
        }
    }
};

const Template = (args) => <ProgressBar {...args} />
export const Default = Template.bind({});
Default.args = {

}

export const BarWithProgressLabel = Template.bind({})
BarWithProgressLabel.args = {
    showPercentage: true,
    
}
