import { makeStyles } from "@material-ui/core";
// import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Alert from "./components/Alert";
import { lazy, Suspense } from "react";



const Homepage =lazy(()=>import ("./Pages/HomePage"))
const CoinPage =lazy(()=>import ("./Pages/CoinPage.js"))

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
        <Suspense fallback={<div>Loading...</div>}>
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        </Suspense>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
