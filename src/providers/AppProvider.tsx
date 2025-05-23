"use client";

import {createContext, useContext, ReactNode} from "react";
import {useMediaQuery} from "@mui/material";
import {ThemeProvider, createTheme, useTheme} from "@mui/material/styles";

interface AppContextType {
  desktop: boolean;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({children}: AppProviderProps) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const appTheme = createTheme({
    typography: {
      fontFamily: [
        "Outfit",
        "Lora",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),

      body1: {
        fontFamily: '"Outfit", sans-serif',
      },

      body2: {
        fontFamily: '"Lora", sans-serif',
      },
    },
    palette: {
      error: {
        main: "#EE3434",
        contrastText: "#fff",
      },
      warning: {
        main: "#ffa726",
        contrastText: "#000",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {minWidth: 0},
        },
      },
    },
  });

  return (
    <AppContext.Provider value={{desktop}}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

const useAppProvider = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppProvider must be used within a AppProvider");
  }
  return context;
};

export {AppProvider, useAppProvider};
