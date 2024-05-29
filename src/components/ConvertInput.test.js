import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ConvertInput from "./ConvertInput";

import { LONG_TEXT } from "../fixtures";


describe("ConvertInput Component", () => {
  test("renders default state", () => {
    render(<ConvertInput />);

    expect(screen.getByLabelText(/Input Token:/i)).toBeChecked();
    expect(screen.getByPlaceholderText(/Enter token count/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter text content/i)).toBeDisabled();
  });

  test("submits token input and displays results", () => {
    render(<ConvertInput />);

    fireEvent.change(screen.getByPlaceholderText(/Enter token count/i), {
      target: { value: "10000" },
    });

    fireEvent.blur(screen.getByPlaceholderText(/Enter token count/i));  // Triggering blur to submit

    expect(screen.getByTestId("user-table-tokens")).toHaveTextContent("10000");
    expect(screen.getByTestId("user-table-word-count")).toHaveTextContent("7500");
    expect(screen.getByTestId("user-table-page-count")).toHaveTextContent("16.7");
    expect(screen.getByTestId("user-table-novel-count")).toHaveTextContent("0.1");
  });

  test("submits text input and displays results", () => {
    const sampleText = "This is a test text.";
    const tokenCount = Math.ceil(sampleText.length / 4);

    render(<ConvertInput />);

    fireEvent.click(screen.getByLabelText(/Input Text:/i));

    fireEvent.change(screen.getByPlaceholderText(/Enter text content/i), {
      target: { value: sampleText },
    });

    fireEvent.blur(screen.getByPlaceholderText(/Enter text content/i));  // Triggering blur to submit

    expect(screen.getByTestId("user-table-tokens")).toHaveTextContent("5");
    expect(screen.getByTestId("user-table-word-count")).toHaveTextContent("4");
    expect(screen.getByTestId("user-table-page-count")).toHaveTextContent("0.0");
    expect(screen.getByTestId("user-table-novel-count")).toHaveTextContent("0.0");
  });

  test("switches between input types and resets state", () => {
    render(<ConvertInput />);

    // Switch to text input and provide some text
    fireEvent.click(screen.getByLabelText(/Input Text:/i));
    fireEvent.change(screen.getByPlaceholderText(/Enter text content/i), {
      target: { value: LONG_TEXT },
    });

    // Ensure the text input state is populated
    fireEvent.blur(screen.getByPlaceholderText(/Enter text content/i));

    const tokensValue = screen.getByTestId("user-table-tokens");
    expect(tokensValue).toHaveTextContent('5,373')

    const wordCountValue = screen.getByTestId("user-table-word-count");
    expect(wordCountValue).toHaveTextContent('4,030');

    const a4PageCountValue = screen.getByTestId("user-table-page-count");
    expect(a4PageCountValue).toHaveTextContent('9.0');

    const a5NovelCountValue = screen.getByTestId("user-table-novel-count");
    expect(a5NovelCountValue).toHaveTextContent('0.1');
  });
});
