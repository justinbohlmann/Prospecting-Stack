import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

console.log("Starting React app...");

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Could not find root element to mount to");
  throw new Error("Could not find root element to mount to");
}

console.log("Root element found, creating React root...");

try {
  const root = ReactDOM.createRoot(rootElement);
  console.log("React root created, rendering app...");

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  console.log("App rendered successfully!");
} catch (error) {
  console.error("Error rendering React app:", error);
  document.getElementById("root").innerHTML = `
    <div style="color: red; padding: 20px; font-family: Arial, sans-serif;">
      <h2>Error loading application</h2>
      <p>${error.message}</p>
      <p>Check the browser console for more details.</p>
    </div>
  `;
}
