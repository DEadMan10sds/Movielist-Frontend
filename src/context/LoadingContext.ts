import { createContext, useContext } from "react";

export type LoadingContextValue = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextValue | undefined>(
  undefined,
);

export const useLoading = () => {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading debe usarse dentro de <FormWrapper>");
  return ctx;
};
