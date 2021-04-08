import React from "react";
import "../../App.css";
import iconSprite from "bootstrap-italia/dist/svg/sprite.svg";
import Cookies from "universal-cookie";
import smartcitylogo from "../../Img/smartcitylogo.PNG";
import mainLogo from "../../Img/smartAnpr_logo_intro.png";
import CarrelloView from "../Objects/CarrelloView";

class Header extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      utente: [],
      defaultEntity: [],
      api_token: cookies.get("api_token"),
      localEnte: cookies.get("ente"),
    };
  }


  deleteCookie() {
    const cookies = new Cookies();

    cookies.remove("ente");
  }

  login() {
    return (
      <a
        href="https://dev2smartanpr.servizilocalispa.it/AuthenticationManager/account/login?returnUrl=http://bari.servizilocalispa.it:3000/home&clientid=smart_crm"
        className="btn btn-primary btn-icon btn-full "
      >
        <span className="rounded-icon">
          <svg className="icon icon-primary">
            <use href={`${iconSprite}#it-user`} />
          </svg>
        </span>
        <span className="d-lg-block">Accedi ai servizi</span>
      </a>
    );
  }

  logout() {
    return (
      <>
        <div className="it-user-wrapper nav-item dropdown">
          <a href="/#"
            className="btn btn-primary btn-icon btn-full "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="rounded-icon">
              <svg className="icon icon-primary">
                <use href={`${iconSprite}#it-user`} />
              </svg>
            </span>
            <span className="d-none d-lg-block">
              {this.props.LastName} {this.props.FirstName}
            </span>
          </a>
          <div
            className="dropdown-menu"
            x-placement="bottom-start"
            style={{
              position: "absolute",
              willChange: "transform",
              top: "0px",
              left: "0px",
              transform: "translate3d(0px, 48px, 0px)",
            }}
          >
            <div className="link-list-wrapper">
              <ul className="link-list ">
                <li>
                  <a
                    className="list-item"
                    href="https://dev2smartanpr.servizilocalispa.it/AuthenticationManager/account/logOff?returnUrl=http://bari.servizilocalispa.it:3000/home"
                    onClick={() => this.deleteCookie()}
                  >
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  ChangeEnte = (name) => {
    const cookies = new Cookies();
    cookies.set("ente", name, { path: "/" });
    window.location.href = "/home";
  };


  render() {
    const listaComuni = [
      { value: "Oria (BA)", title: "Oria" },
      { value: "Bari (BA)", title: "Bari" },
      { value: "Altamura (BA)", title: "Altamura" },
    ];

    return (
      <>
        <header className="it-header-wrapper it-header-sticky">
          <div className="it-header-slim-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="it-header-slim-wrapper-content">
                    <a className=" d-lg-block navbar-brand" href="#">
                      Servizi Locali Spa
                    </a>

                    <div className="it-header-slim-right-zone ">
                      {this.state.api_token && (
                        <>
                          {this.props.linksEsterni &&
                            this.props.linksEsterni.length < 6 ? (
                            <>
                              <div className="nav-item d-none d-lg-block">
                                {this.props.linksEsterni &&
                                  this.props.linksEsterni.map((linkObb, index) => (
                                    <span
                                      className="linkMenu"
                                      key={index}
                                    >
                                      <a href={linkObb.Url}>{linkObb.Title}</a>
                                    </span>
                                  ))}
                              </div>
                            </>
                          ) : (
                            <div className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>Smart City Pa</span>
                                <svg className="icon d-none d-lg-block">
                                  <use href={`${iconSprite}#it-expand`} />
                                </svg>
                              </a>
                              <div className="dropdown-menu">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="link-list-wrapper">
                                      <ul className="link-list">
                                        {this.props.linksEsterni &&
                                          this.props.linksEsterni.map(
                                            (linkObb, index) => (
                                              <li key={index}>
                                                <a
                                                  className="list-item"
                                                  href={linkObb.Url}
                                                >
                                                  <span>{linkObb.Title}</span>
                                                </a>{" "}
                                              </li>
                                            )
                                          )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      <div className="it-access-top-wrapper">
                        {this.state.api_token ? this.logout() : this.login()}
                      </div>

                      {this.props.LastName && (
                        <div style={{ marginLeft: "2px", padding: "2px" }}>
                          <svg className="icon icon-light  ">
                            {" "}
                            <use href={`${iconSprite}#it-horn`} />
                          </svg>
                          <span className="badge badge-light">0</span>
                          {" "}
                          <CarrelloView countCarrello={this.props.conteggio}></CarrelloView>
                          {/* <span className="badge badge-danger">9</span> */}

                          {/*                                        
                                            <svg className="icon icon-light  ">  <use href={`${iconSprite}#it-folder`} /></svg>
                                            <span className="badge badge-light">9</span>
                                            <span className="sr-only">Messaggi non letti<span className="badge badge-light">0</span></span> */}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="it-nav-wrapper">
            <div className="it-header-center-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="it-header-center-content-wrapper">
                      <div className="it-brand-wrapper">
                        <a href="/Portal/" className="">
                          <img height="80" src={smartcitylogo} />
                          <div className="it-brand-text">
                            <h2 className="no_toc pb-1  d-none d-lg-block">
                              {" "}
                              <img height="35" src={mainLogo} />
                            </h2>
                            <h3 className="no_toc d-none d-lg-block">
                              Servizi per il cittadino
                            </h3>
                          </div>
                        </a>
                      </div>
                      {this.state.api_token && (
                        <>
                          <div className="it-right-zone">
                            <a
                              className="  dropdown-toggle"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <h4 className="no_toc entityComune">
                                Comune di{" "}
                                {this.props.AreaName && (
                                  <b>{this.props.AreaName}</b>
                                )}{" "}
                                <svg className="icon-expand icon icon-sm icon-light">
                                  <use href={`${iconSprite}#it-expand`} />
                                </svg>
                              </h4>
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right"
                              style={{
                                position: "absolute",
                                willChange: "transform",
                                top: "0px",
                                left: "0px",
                                transform: "translate3d(0px, 48px, 0px)",
                              }}
                            >
                              <div className="link-list-wrapper">
                                <ul className="link-list">
                                  {listaComuni.map((obbj, index) => (

                                    this.props.AreaName !== obbj.value && (
                                      <li key={index}>
                                        <a
                                          className="list-item"
                                          href="#"
                                          onClick={() =>
                                            this.ChangeEnte(obbj.value)
                                          }
                                        >
                                          <span>{obbj.title}</span>
                                        </a>
                                      </li>
                                    )

                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-header-navbar-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <nav className="navbar navbar-expand-lg has-megamenu">
                      <button
                        className="custom-navbar-toggler"
                        type="button"
                        aria-controls="nav02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        data-target="#nav02"
                      >
                        <svg className="icon">
                          <use href={`${iconSprite}#it-burger`} />
                        </svg>
                      </button>
                      <div
                        className="navbar-collapsable"
                        id="nav02"
                        style={{ display: "none" }}
                      >
                        <div
                          className="overlay"
                          style={{ display: "none" }}
                        ></div>
                        <div className="close-div sr-only">
                          <button className="btn close-menu" type="button">
                            <span className="it-close"></span>close
                          </button>
                        </div>
                        <div className="menu-wrapper">
                          <ul className="navbar-nav">
                            {this.props.links &&
                              this.props.links.map((linkObb, index) => (
                                <li
                                  className="nav-item active"
                                  key={index}
                                >
                                  <a
                                    className="nav-link"
                                    href={linkObb.url}

                                  >
                                    <span>{linkObb.testo} </span>
                                    <span className="sr-only">current</span>
                                  </a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
