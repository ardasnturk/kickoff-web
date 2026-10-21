import React from "react";
import ReactDOM from "react-dom/client";
import App, { type Page } from "./App";
import "./index.css";

// Each HTML entry (index, privacy, terms, support) names its page on <body data-page>.
const page = (document.body.dataset.page ?? "home") as Page;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App page={page} />
  </React.StrictMode>
);
