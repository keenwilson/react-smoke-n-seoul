import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Routes } from "./routes";
import { Burger, BurgerMenu } from "./components";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <BurgerMenu node={node} open={open} setOpen={setOpen} id={menuId} />
        </div>
        <Routes theme={theme} />
      </>
    </ThemeProvider>
  );
}
export default App;
