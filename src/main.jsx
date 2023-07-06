import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const base = 20;
const designWidth = 1440;
let tempsize = base / designWidth;
let width =window.innerWidth;
let fontSize = tempsize * width;
if (fontSize < 10) fontSize = 10;
document.documentElement.style.fontSize = fontSize + "px";
window.addEventListener("resize", () => {
  let tempsize = base / designWidth;
  let width = window.innerWidth;
  let fontSize = tempsize * width;
  if (fontSize < 15) fontSize = 15;
  document.documentElement.style.fontSize = fontSize + "px";
  // console.log(document.documentElement.style.fontSize);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
