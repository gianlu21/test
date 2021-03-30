import React from "react";

import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import iconSprite from "bootstrap-italia/dist/svg/sprite.svg";


import FlexWebchat from "../../FlexWebchat";

class Help extends React.Component {

 

  constructor(props) {
    super(props);
  
    console.log(props)
    this.state = {
      
    };
  
  }





  render() {
    return (
      <div className="container my-4">
        <div className="px-lg-5 px-2">
          <div className="row pt-md-4">
            <div className="col-lg-6 col-12">
              <h2>Serve aiuto?</h2>
              <br />
              <p>
                Contatta l'<strong>assistenza</strong> per segnalare eventuali
                problematiche riscontrate.
              </p>
              <p>
                Puoi <strong>scriverci una email</strong> esplicitando la tua
                richiesta ed includendo tutte le informazioni in tuo possesso
                (es. codice fiscale, Comune di residenza, screenshot, etc.) che
                possono esserci utili a capire il problema e fornirti il
                migliore supporto possibile.
              </p>
              <div className="it-helpdesk d-md-flex mb-4">
                <div className="it-btn-container">
                  <a
                    className="btn btn-primary btn-icon noloader"
                    href="mailto:segnalazioni@smartanpr.it"
                  >
                    <svg className="icon icon-white d-none d-lg-block">
                      <use href={`${iconSprite}#it-mail`} />{" "}
                    </svg>
                    <span>segnalazioni@smarpagamenti.it</span>
                  </a>
                </div>
              </div>
              <p>
                Per ulteriori informazioni puoi consultare le{" "}
                <a
                  className="text-decoration-none font-weight-bold"
                  href="/faq"
                >
                  FAQ di Smart Pagamenti
                </a>
              </p>
              <p>
                Se invece hai{" "}
                <strong>
                  problemi specifici legati all'accesso mediante SPID o CIE
                </strong>{" "}
                (Pin smarrito, recupero credenziali, etc. ) avrai una risposta
                più rapida contattando direttamente l’assistenza relativa metodo
                di autenticazione che hai utilizzato.
              </p>
              <ul>
                <li>
                  <a
                    className="text-decoration-none font-weight-bold"
                    href="https://www.spid.gov.it/serve-aiuto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistenza SPID
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none font-weight-bold"
                    href="https://www.cartaidentita.interno.gov.it/contatti/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistenza CIE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

     
        <FlexWebchat configuration={window.appConfig} user={this.props.user}/>
      </div>
    );
  }
}

export default Help;
