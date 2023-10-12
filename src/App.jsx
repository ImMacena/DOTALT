import { useCallback, useState } from "react";

import { Outlet } from "react-router";

import { ThemeProvider } from "styled-components";

import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";
import { GlobalStyle } from "./styles/global";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
