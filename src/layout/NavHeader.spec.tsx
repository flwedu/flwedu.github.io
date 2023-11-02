import { HashRouter } from "react-router-dom";
import { describe, expect, it } from 'vitest'
import { render } from '../utils/test-utils'
import { NavHeader } from "./NavHeader";

describe("NavHeader component test", () => {
  it("Should render a component that matches the snapshot", () => {
    const { container } = render(
        <HashRouter>
          <NavHeader />
        </HashRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
