import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes";

import "./App.css";

// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviesPage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import Cast from "./pages/Cast";
// import Reviews from "./pages/Reviews";

const HomePage = lazy(() => import("./pages/HomePage.js"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage.js")
);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.js"));

const App = () => {
  return (
    <>
      <AppBar />
      <div>
        <Suspense fallback={<h1>Loading..</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
