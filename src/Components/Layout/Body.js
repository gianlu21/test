import Cookies from "universal-cookie";
import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../Page/Home.js";
import Faq from "../Page/Faq.js";
import Help from "../Page/Help.js";
import Servizi from "../Page/Servizi.js";



import Fascicolo from "../Page/Fascicolo.js";

import Carrello from "../Page/Carrello.js";

import PagamentiEffettuati from "../Page/PagamentiEffettuati.js";

import PagamentiAttesi from "../Page/PagamentiAttesi.js";



class Body extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();

    this.state = {
      api_token: cookies.get("api_token"),

    };
  }

  render() {
    return (

      <main role="main" className="main-body">
        {this.state.api_token ? (
          <div>
            <Switch>
              <Route exact path="/help">
                <Help user={this.props.user}></Help>
              </Route>

              <Route exact path="/faq">
                <Faq></Faq>
              </Route>

              <Route path="/fascicolo">
                <Fascicolo user={this.props.user}></Fascicolo>
              </Route>

              <Route path="/pagamentieffettuati">
                <PagamentiEffettuati></PagamentiEffettuati>
              </Route>

              <Route path="/pagamentiattesi">
                <PagamentiAttesi carrello2={this.props.carrello}></PagamentiAttesi>
              </Route>

              <Route path="/carrello">
                <Carrello></Carrello>
              </Route>

              <Route path="/">
                <Servizi></Servizi>
              </Route>
            </Switch>
          </div>
        ) : (
          <div>
            <Switch>
              <Route exact path="/help">
                <Help user={this.props.users}></Help>

              </Route>

              <Route exact path="/faq">
                <Faq></Faq>
              </Route>

              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </div>
        )}
      </main>
    );
  }
}

export default Body;
