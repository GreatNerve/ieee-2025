"use client";

import { ThemeProvider } from "./theme-provider";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}