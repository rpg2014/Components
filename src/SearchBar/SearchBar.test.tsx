import React from "react";
import { render } from "@testing-library/react";

import SearchBar from "./SearchBar";
import { SearchBarProps } from "./SearchBar.types";

describe("Test Component", () => {
  let props: SearchBarProps;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<SearchBar {...props} />);

  it("should render correctly", () => {
    
    const { getByTestId } = renderComponent();

    const component = getByTestId("SearchBar");

    
  });
});
