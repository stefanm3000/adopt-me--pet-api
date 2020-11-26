import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.js";
import { Router } from "@reach/router";
import Details from "./Details.js";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
