import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecipeProvider } from "./context/RecipeContext";

import "@fontsource/poppins";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/ai-recipe-generator">
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </BrowserRouter>
  </React.StrictMode>
);