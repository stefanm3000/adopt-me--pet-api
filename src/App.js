import React, { useState } from "react";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("#ff9797");

  return (
    <React.StrictMode>
        <ThemeContext.Provider value={themeHook}>
          <div>
            <header>
              <Link to="/">Adopt Me!</Link>
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

export default App;
