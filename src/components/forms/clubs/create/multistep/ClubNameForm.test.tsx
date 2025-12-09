import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "@jest/globals";
import ClubNameForm from "./ClubNameForm";
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

  it("calls onDataChange when inputs change", () => {
    renderComponent();
    const nameInput = screen.getByLabelText(/club name/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    fireEvent.change(nameInput, { target: { value: "Book Lovers" } });
    fireEvent.change(descriptionInput, {
      target: { value: "A club for book enthusiasts" },
    });
    expect(mockOnDataChange).toHaveBeenCalledWith({
      name: "Book Lovers",
      description: "A club for book enthusiasts",
    });
  });

  // TODO: Call onValidationChange on validation status change

  // TODO: Save typed values in the form inputs when switching steps

  // TODO: Check that all the data is passed/collected in a formData object in the parent
  // TODO: That will onSubmit submit the full formData object to the backend in a POST request
});
