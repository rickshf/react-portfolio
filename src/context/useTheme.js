import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Convenience hook so components can access ThemeContext

export function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
