import { createContext, useContext } from "react";
import type { AlertsContextType } from "../types/Alert";

export const AlertContext = createContext<AlertsContextType | null>(null);

export const useInlineAlert = () => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useInlineAlert needs it's provider");
  return ctx;
};
