import React from "react";
import { createRoot } from "react-dom/client"; // createRoot를 import
import App from "./App"; // App 컴포넌트 import
import "./index.css"; // 스타일 import

// root 엘리먼트에 React 애플리케이션을 렌더링
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
