import React from "react";
// testing
import IndexPage from "./index";
import { render } from "@testing-library/react";

describe("<IndexPage>", () => {
  it("Hello문구가 보인다.", async () => {
    const { findByText } = render(<IndexPage />);

    findByText("Hello");
  });
});
