// ClubNameForm tests
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "@jest/globals";
import ClubNameForm from "./ClubNameForm";

// Extend Jest matchers
import "@testing-library/jest-dom";

describe("ClubNameForm", () => {
  const mockOnDataChange = jest.fn();
  const mockOnValidationChange = jest.fn();

  const renderComponent = () => {
    render(
      <ClubNameForm
        onDataChange={mockOnDataChange}
        onValidationChange={mockOnValidationChange}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("validates required club name", async () => {
    renderComponent();
    const nameInput = screen.getByLabelText(/club name/i);
    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.blur(nameInput);
    expect(
      await screen.findByText(/club name is required/i)
    ).toBeInTheDocument();
  });
});
