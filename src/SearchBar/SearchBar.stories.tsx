import React from "react";
import SearchBar from "./SearchBar";
import { SearchBarProps } from "./SearchBar.types";

export default {
    title: "SearchBar",
    component: SearchBar
};

const Template = (args: SearchBarProps) => <SearchBar {...args} />
export const Default = Template.bind({});
Default.args = {   
    label: "Search bar",
    buttonLabel: "🡲",
    placeholder: "placeholder",
    width: '45%'
}
