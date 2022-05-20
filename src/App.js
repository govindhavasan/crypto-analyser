import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import { makeStyles } from "@material-ui/core";
import Banner from "./components/Banner/Banner";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Banner />
      </div>
    </BrowserRouter>
  );
}

export default App;
