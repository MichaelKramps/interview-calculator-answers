import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";

import Calculator from "../answers/Calculator/Calculator";


describe("Calculator", () => {

    it("Renders a 9", () => {
        render(<Calculator/>);

        expect(screen.queryByText("9")).toBeInTheDocument();
    });

    describe("can pass information to child components", () => {
        it("passes along the updateDisplay function", () => {
            // Candidate will need to pass the updateDisplay function
            // as a prop to the <Keypad /> component
            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("8"));

            expect(screen.queryByText("98")).toBeInTheDocument();
        });
    });

    describe("can update state", () => {
        it("inputs decimals", () => {

            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("."));
            fireEvent.click(screen.getByText("8"));

            expect(screen.queryByText("9.8")).toBeInTheDocument();
        });

        it("avoids impossible decimals", () => {
            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("."));
            fireEvent.click(screen.getByText("."));
            fireEvent.click(screen.getByText("8"));
            fireEvent.click(screen.getByText("."));

            expect(screen.queryByText("9.8")).toBeInTheDocument();
        });

        it("clicking ce key deletes end value of display", () => {
            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("8"));
            fireEvent.click(screen.getByText("7"));

            expect(screen.queryByText("987")).toBeInTheDocument();

            fireEvent.click(screen.getByText("ce"));

            expect(screen.queryByText("98")).toBeInTheDocument();
        });

        it("clicking an operator adds to display", () => {
            // operator <Key />'s are mapped differently
            // they're passed the setOperator method instead of the updateDisplay method
            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("8"));
            fireEvent.click(screen.getByText("+"));
            fireEvent.click(screen.getByText("7"));
            fireEvent.click(screen.getByText("6"));

            expect(screen.queryByText("98+76")).toBeInTheDocument();
        });

        it("performs the plus calculation and displays it", () => {
            // equals sign is passed the callOperator method
            // might start a discussion about the name of that method
            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("8"));
            fireEvent.click(screen.getByText("+"));
            fireEvent.click(screen.getByText("7"));
            fireEvent.click(screen.getByText("6"));
            fireEvent.click(screen.getByText("="));

            expect(screen.queryByText("174")).toBeInTheDocument();
        });

        it("performs the minus calculation and displays it", () => {
            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("8"));
            fireEvent.click(screen.getByText("-"));
            fireEvent.click(screen.getByText("7"));
            fireEvent.click(screen.getByText("6"));
            fireEvent.click(screen.getByText("="));

            expect(screen.queryByText("22")).toBeInTheDocument();
        });

        it("performs the multiply calculation and displays it", () => {
            render(<Calculator/>);

            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("x"));
            fireEvent.click(screen.getByText("7"));
            fireEvent.click(screen.getByText("6"));
            fireEvent.click(screen.getByText("="));

            expect(screen.queryByText("684")).toBeInTheDocument();
        });

        it("performs the divide calculation and displays it", () => {
            render(<Calculator/>);

            fireEvent.click(screen.getByText("1"));
            fireEvent.click(screen.getByText("5"));
            fireEvent.click(screen.getByText("3"));
            fireEvent.click(screen.getByText("/"));
            fireEvent.click(screen.getByText("9"));
            fireEvent.click(screen.getByText("="));

            expect(screen.queryByText("17")).toBeInTheDocument();
        });
    });
});