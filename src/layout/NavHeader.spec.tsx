import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { TextContextProvider } from "../contexts/providers/text-context-provider";
import { StorageService } from "../service/storage-service";
import { NavHeader } from "./NavHeader";

describe("NavHeader component test", () => {
  test("Rendered component should match the snapshot", () => {
    const storageService = new StorageService();
    const { container } = render(
      <TextContextProvider storageService={storageService}>
        <HashRouter>
          <NavHeader />
        </HashRouter>
      </TextContextProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

export {};
