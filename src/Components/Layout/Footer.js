import React from "react";

import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import mainLogo from "../../Img/smartAnpr_logo_intro.png";

import smartcitylogo from "../../Img/smartcitylogo.PNG";

import GooglePlayGet from "../../Img/GooglePlayGet.png";
import AppStoreDownload from "../../Img/AppStoreDownload.png";

class Footer extends React.Component {


  render() {
    return (
      <footer className="it-footer">
        <div className="it-footer-main">
          <div className="container footerText">
            <section>
              <div className="row ">
                <div className="col-sm-12">
                  <div className="it-brand-wrapper">
                    <a href="/Portal/" className="">
                      <img alt="dd" height="90" src={smartcitylogo} />
                      <div className="it-brand-text">
                        <h2 className="no_toc pb-1">
                          {" "}
                          <img alt="dd" height="30" src={mainLogo} />
                        </h2>
                        <br />
                        <h3 className="no_toc d-none d-lg-block">
                          Servizi anagrafici al cittadino
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section></section>
            <section className="py-4">
              <div className="row clearfix">
                <div className="col-lg-3 col-md-3 pb-2">
                  <h4>
                    <a href="/#" title="Vai alla pagina: Amministrazione">
                      SEGNALAZIONI
                    </a>
                  </h4>
                  <p>segnalazioni@smartcitypa.it</p>
                  <h4>
                    <a href="/#"
                      href="/AuthenticationManager/Account/Login"
                      title="Vai alla pagina: Amministrazione"
                    >
                      AREA RISERVATA
                    </a>
                  </h4>
                </div>
                <div className="col-lg-3 col-md-3 pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Amministrazione">
                      INFORMAZIONI
                    </a>
                  </h4>
                  <p>
                    <strong>Smart City PA</strong>
                    <br />
                    <a
                      href="http://www.smartcitypa.it"
                      className="small-prints"
                      target="_blank"
                      title="www.smartcitypa.it"
                      rel="noopener noreferrer"
                    >
                      www.smartcitypa.it
                    </a>{" "}
                    <br />
                    info@smartcitypa.it
                  </p>
                  <p></p>
                  <p></p>
                </div>

                <div className="col-lg-3 col-md-3 pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Amministrazione">
                      CONTATTI
                    </a>
                  </h4>
                  <p>
                    <strong>Servizi Locali SPA</strong> <br />
                    Via Cerva 18 - 20122 Milano (MI) <br />
                    C.F./P.IVA: 03170580751 <br />
                    <a
                      href="http://www.servizilocalispa.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small-prints"
                      title="www.servizilocalispa.it"
                    >
                      www.servizilocalispa.it
                    </a>
                  </p>
                </div>

                <div className="col-lg-3 col-md-3 pb-2">
                  <h4>
                    <a href="#" title="Vai alla pagina: Amministrazione">
                      APPS
                    </a>
                  </h4>
                  <p>
                    <img src={GooglePlayGet} className="storeApp" alt="" />
                  </p>
                  <p>
                    <img src={AppStoreDownload} className="storeApp" alt="" />
                  </p>
                </div>
              </div>
            </section>

            <section className="py-4 border-white border-top">
              <div className="container  ">
                <h3 className="sr-only">Sezione Link Utili</h3>
                <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
                  <li className="list-inline-item">
                    <a
                      href="#"
                      className="small-prints"
                      title="Privacy-Cookies"
                    >
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
