import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import App from "./Navbar";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// function Say() {
//     const name = "John";

// return (
//     <div>
//         <p>Hi {name} </p>
//     </div>
//     );
// }

// export default Say;