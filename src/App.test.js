import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
describe("Todo module", () => {
  test("renders TodoApp component", () => {
    render(<App />);
    const inputEle = screen.getByLabelText("Add a task");
    const addBtn = screen.getByRole("button", { name: "Add" });

    expect(inputEle).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
  });

  test("add a new task", () => {
    render(<App />);
    const inputEle = screen.getByLabelText("Add a task");
    const addBtn = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputEle, { target: { value: "learn rtl" } });
    fireEvent.click(addBtn);

    const todoItem = screen.getByText("learn rtl");
    expect(todoItem).toBeInTheDocument();
  });

  test("delete a task", () => {
    render(<App />);
    const inputEle = screen.getByLabelText("Add a task");
    const addBtn = screen.getByRole("button", { name: "Add" });

    fireEvent.change(inputEle, { target: { value: "learn docker" } });
    fireEvent.click(addBtn);

    const todoItem = screen.getByText("learn docker");
    expect(todoItem).toBeInTheDocument();

    const deleteBtn = screen.getByTestId("delete_btn");
    fireEvent.click(deleteBtn);

    expect(todoItem).not.toBeInTheDocument();
  });
});
