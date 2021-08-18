import React from "react";
import { render } from "@testing-library/react";

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

describe("Test Component", () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<ProgressBar {...props} />);

  it("should render correctly", () => {
    
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBar");

    
  });
});
