//@ts-nocheck
import { fireEvent, render } from "@testing-library/react";
import textSource from "../../static/res/texts.json";
import { TextContext } from "../contexts/providers/text-context-provider";
import LanguageButton from "./LanguageButton";

describe("Language Button component tests", () => {
  test("Button should be rendered on the screen", () => {
    let text = textSource.en;
    const toggleFn = jest.fn();
    const { container } = render(
      <TextContext.Provider value={{ toggleFn, text, language: "en" }}>
        <LanguageButton />
      </TextContext.Provider>
    );

    const buttonDiv = container.querySelector("div .fixed");

    expect(buttonDiv).toBeTruthy();
  });

  test("Button should trigger toggleFn function on click", () => {
    let text = textSource.en;
    const toggleFn = jest.fn();

    const { container } = render(
      <TextContext.Provider value={{ toggleFn, text, language: "en" }}>
        <LanguageButton />
      </TextContext.Provider>
    );

    const div = container.querySelector("div");
    const span = container.querySelector("span");

    // Start with 🇺🇸
    expect(span.textContent).toEqual("🇺🇸");

    fireEvent.click(div);
    expect(toggleFn).toHaveBeenCalledTimes(1);
  });
});

export {};
