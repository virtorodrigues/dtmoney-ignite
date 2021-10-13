import { useEffect } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { client, q } from "./services/api";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
