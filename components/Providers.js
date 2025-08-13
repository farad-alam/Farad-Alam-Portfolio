// components/Providers.js
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
