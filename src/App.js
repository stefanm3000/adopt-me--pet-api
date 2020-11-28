import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.js";
import { Link, Router } from "@reach/router";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("lightgreen");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
