"use client";

import { useEffect, useRef } from "react";

export default function GlobalErrorTracker() {
  const originalErrorRef = useRef<typeof console.error | null>(null);

  useEffect(() => {
    // Store original console.error
    originalErrorRef.current = console.error.bind(console);

    // Override console.error
    console.error = (...args: unknown[]) => {
      const message = typeof args[0] === "string" ? args[0] : "";

      // Intercept the Link error
      if (message.includes("The prop `href` expects")) {
        
        // 🛑 PAUSES EXECUTION HERE SO YOU CAN SEE THE LINE 🛑
        debugger; 

        console.group("🚨 LINK ERROR DETECTED");
        console.log("❗ Error message:", message);
        
        // Print the React stack (most accurate)
        originalErrorRef.current?.(...args);
        console.groupEnd();
      } else {
        // Forward all other errors
        originalErrorRef.current?.(...args);
      }
    };

    return () => {
      if (originalErrorRef.current) {
        console.error = originalErrorRef.current;
      }
    };
  }, []);

  return null;
}