import React from "react";
import Cookies from 'universal-cookie';
import { BrowserRouter as Router } from "react-router-dom";





import 'bootstrap-italia/dist/js/bootstrap-italia.bundle.min';
import './App.css';

import Header from './Components/Layout/Header';


import ListApi from "./Components/Utility/ListApi"
import configuration from "./config.json";
import Footer from "./Components/Layout/Footer";
import Body from "./Components/Layout/Body";



class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = new Cookies();




    this.state = {
      utente: [],
      defaultEntity: [],
      api_token: cookies.get('api_token'),
      localEnte: cookies.get('ente'),
      listaLinkUtente: [
        { testo: "Home", url: "/home" },
        { testo: "Domande Frequenti", url: "/faq" },
        { testo: "Serve Aiuto?", url: "/help" }
      ]

    };



        


    if (this.state.api_token) {
      ListApi.getData(this.state.api_token, configuration.URL_GET_PROFILE)
        .then((response) => {
          console.log(response.data);
          this.setState({
            utente: response.data,
            defaultEntity: cookies.get('user_profile').AreaName,

          });

        })
        .catch((error) => {
          console.log(error)
        });
    }




  }






  









  render() {
    return (
      <div className="App">
        
        <Header

          LastName={this.state.utente.LastName}
          FirstName={this.state.utente.FirstName}
          url="http://www.servizilocalispa.com/"
          Title="Servizi Locali Spa"
          links={this.state.listaLinkUtente}
          linksEsterni={this.state.utente.Apps}
          AreaName={!this.state.localEnte ? this.state.defaultEntity : this.state.localEnte}
        />

        <Router>

          <Body user={this.state.utente}></Body>
        </Router>



        <Footer> </Footer>
      </div>
    );
  }
}


export default App;
