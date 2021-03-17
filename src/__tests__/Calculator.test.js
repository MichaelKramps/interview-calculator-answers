import React from "react";
import {waitFor, render, screen, fireEvent} from "@testing-library/react";

import Calculator from "../components/Calculator/Calculator";


describe("AddAirbnbAccount", () => {
    it("Renders a div", () => {
        render(<Calculator/>);

        expect(screen.queryByText("0")).toBeInTheDocument();
    })
});