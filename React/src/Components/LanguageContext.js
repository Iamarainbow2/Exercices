import { createContext } from "react";

export const LanguageContext = createContext(undefined)

export function useLanguageContext() {
  if(LanguageContext === undefined) {
    throw new Error('Use useLanguageContext within the context provider.')
  }

  return LanguageContext;
}