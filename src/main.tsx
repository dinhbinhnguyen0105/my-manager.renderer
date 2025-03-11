import { createRoot } from "react-dom/client";

import App from "~/App";
import "./main.scss";

const containerElm = document.querySelector("#root");
if (containerElm) {
    const root = createRoot(containerElm);
    root.render(<App />);
} else {
    console.error("container not found!");
}