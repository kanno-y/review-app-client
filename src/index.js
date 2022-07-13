import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import { App } from "./App.js";

const container = document.querySelector("#content");
const root = createRoot(container);
root.render(<App />);
