import React from "react";
import Home from "../../pages/home";

import { useRouter } from 'next/router';
import { render, screen, fireEvent } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import "@testing-library/jest-dom";

describe("home page", () => {

    beforeEach(() => {
        render(<Home />);
    });

    test("has a dashboard", () => {
        expect(screen.getByLabelText("Dashboard")).toBeInTheDocument();
    });
});