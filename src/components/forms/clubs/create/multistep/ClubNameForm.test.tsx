import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { expect } from "@jest/globals";
import ClubNameForm from "./ClubNameForm";
import "@testing-library/jest-dom";

describe("ClubNameForm", () => {
  const mockOnDataChange = jest.fn();
  const mockOnValidationChange = jest.fn();

  const renderComponent = () => {
    render(
      <ClubNameForm
        defaultValues={{ name: "", description: "" }}
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

  it("calls onValidationChange with true when form is valid", async () => {
    renderComponent();
    const nameInput = screen.getByLabelText(/club name/i);
    fireEvent.change(nameInput, { target: { value: "Book Lovers" } });
    fireEvent.blur(nameInput);
    await waitFor(() => {
      expect(mockOnValidationChange).toHaveBeenCalledWith(true);
    });
  });

  it("calls onValidationChange with false when form is invalid", async () => {
    renderComponent();
    const nameInput = screen.getByLabelText(/club name/i);
    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.blur(nameInput);
    await waitFor(() => {
      expect(mockOnValidationChange).toHaveBeenCalledWith(false);
    });
  });

  // TODO: Create an integration test for the full multistep form flow that:
  // TODO: Check that all the data is passed/collected in a formData object in the parent
  // TODO: onSubmit submit the full formData object to the backend in a POST request
});
