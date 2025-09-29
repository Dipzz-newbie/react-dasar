import { StrictMode } from "react";
import GuestBook from "./GuestBook";

const { createRoot } = require("react-dom/client");



createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GuestBook/>
    </StrictMode>
)