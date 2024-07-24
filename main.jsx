import reactDOM from "react-dom/client";
import App from "./App";

const rootEl = document.querySelector("#root");
const root = reactDOM.createRoot(rootEl);

root.render(<App />);
