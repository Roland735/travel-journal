"use client";
import { useEffect } from "react";
import "./globals.css";


export default function Layout({ children }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker registered"))
        .catch((err) => console.error("Service Worker registration failed:", err));
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Travel Journal</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
