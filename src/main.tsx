import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Popup } from "./chrome-extension/popup/index";
import "./chrome-extension/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className=" bg-slate-100 w-[500px] h-[500px] rounded-md flex">
      <Popup />
    </div>
  </StrictMode>
);
