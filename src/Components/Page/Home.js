import Cookies from "universal-cookie";
import React from "react";

import placeholderHero from "../../Img/placeholderHero.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();

    this.state = {
      api_token: cookies.get("api_token"),
    };
  }

  render() {
    return (
      <div className="it-hero-wrapper it-dark it-overlay">
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <div className="img-wrapper">
              <img src={placeholderHero} title="img title" alt="imagealt" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="it-hero-text-wrapper bg-dark">
                <span className="it-category">SmartPagamenti</span>
                <b className=" HeroHome">
                  {" "}
                  SmartPagamenti è una piattaforma che permette ai cittadini di
                  accedere, in modo rapido e sicuro ai servizi di pagamento nei
                  confronti dell’ente, eliminando le attese ed avendo una reale
                  risparmio di tempo.
                </b>

                <i className="d-none d-lg-block HeroHomeText">
                  Senza autenticarsi, è possibile procedere al pagamento di un
                  avviso di pagamento ricevuto o ad un pagamento spontaneo.
                </i>
                <i className="d-none d-lg-block HeroHomeText">
                  Autenticandosi, è possibile accedere ad ulteriori funzionali
                  come la consultazione del proprio “Fascicolo del
                  Contribuente”, sei “Pagamenti Attesi” dall’ente e dei
                  “Pagamenti Effettuati”.{" "}
                </i>

                <div className="btnHome">
                  <button
                    type="button"
                    className="btn btn-primary btn-xs btn-icon text-left text-white"
                  >
                    PAGA UN AVVISO PAGOPA COME UTENTE NON REGISTRATO{" "}
                  </button>
                </div>

                <div className="btnHome">
                  <button
                    type="button"
                    className="btn btn-primary btn-xs btn-icon text-left text-white"
                  >
                    EFFETTUA UN PAGAMENTO SPONTANEO COME UTENTE NON REGISTRATO{" "}
                  </button>
                </div>

                <div className="btnHome">
                  <button
                    type="button"
                    className="btn btn-primary btn-xs btn-icon text-left text-white"
                  >
                    ACCEDI AI SERVIZI{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
