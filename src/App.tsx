import type { FunctionComponent } from "react";
import { css } from "@linaria/core";

const hello = css`
  font-size: 4rem;
  font-style: italic;
  font-weight: bold;
`;

const App: FunctionComponent = () => {
  return <div className={hello}>Hello!</div>;
};

export default App;
