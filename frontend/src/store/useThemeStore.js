// import { create } from "zustand";

// export const useThemeStore = create((set) => ({
//   theme: localStorage.getItem("chat-theme") || "dark",
//   setTheme: (theme) => {
//     localStorage.setItem("chat-theme", theme);
//     set({ theme });
//   },
// }));

import { create } from "zustand";

const validThemes = ["light", "dark", "cupcake", "coffee"]; // add all DaisyUI themes you support
const defaultTheme = "coffee";

export const useThemeStore = create((set) => {
  // Get saved theme from localStorage
  let savedTheme = localStorage.getItem("chat-theme");

  // If saved theme is invalid or missing, use default
  if (!savedTheme || !validThemes.includes(savedTheme)) {
    savedTheme = defaultTheme;
    localStorage.setItem("chat-theme", savedTheme);
  }

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      if (validThemes.includes(theme)) {
        localStorage.setItem("chat-theme", theme);
        set({ theme });
      }
    },
  };
});
