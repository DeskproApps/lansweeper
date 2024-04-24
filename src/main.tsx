import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "iframe-resizer/js/iframeResizer.contentWindow.js";

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render((
  <React.StrictMode>
    <App />
  </React.StrictMode>
));
