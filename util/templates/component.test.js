module.exports = (componentName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render correctly", () => {
    
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    
  });
});
`,
  extension: `.test.tsx`
});
