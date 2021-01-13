import React from "react";
import { css } from "@linaria/core";

const hello = css`
  font-size: 4rem;
  font-style: italic;
  font-weight: bold;
`;

const App = () => {
  return <div className={hello}>Hello!</div>;
};

export default App;
