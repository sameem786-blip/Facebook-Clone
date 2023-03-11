import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/home";


import "@testing-library/jest-dom";

test("home page", () => {
    it("renders without crashing", () => {
        render(<Home />);

        const header = screen.getByRole("heading");
        const header = "Hello World!";

        expect(header).toHaveTextContext(headerText);

    });
});