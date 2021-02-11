import React, { useEffect } from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import TopBar from "../../features/TopBar";
import useTitle from "../../hooks/useTitle";

function App() {
  const setTitle = useTitle();
  let title: string | undefined = undefined;
  useEffect(() => {
    setTitle(title);
  }, [setTitle, title]);
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <header className="App-header">素晴らしいコンテンツ</header>
    </div>
  );
}

export default App;
