import React from 'react';
import GlobalStyle from './globalStyles';
import { Navbar, Footer } from "./components";
import { Home, Search, ScrollTop } from "./pages";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router >
      <ScrollTop />
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:city/:id" exact component={Search} />
      </Switch>
      
      <Footer/>

    </Router>
  );
}

export default App;
