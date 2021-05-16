// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Spinner from "./Spinner";
import { SpinnerProps } from "./Spinner.types";

describe("Test Component", () => {
  let props: SpinnerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Spinner {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Spinner");

    expect(component).toHaveTextContent("harvey was here");
  });
});
