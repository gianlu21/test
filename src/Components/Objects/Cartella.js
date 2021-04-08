import React from "react";
import Cookies from "universal-cookie";
import moment from "moment";
import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import iconSprite from "bootstrap-italia/dist/svg/sprite.svg";



class Cartella extends React.Component {
    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            api_token: cookies.get("api_token")
        };
    }

    render() {



        let cartella = this.props.children;

        return (
            <>
                {console.log(this.props.children)}{" "}
                {cartella && (
                    <>




                        <div className="row">
                            <div className="col-6 col-md-4">
                                <div className="form-group">
                                    <b >Data Emissione</b>
                                    <input type="text" className="form-control" readOnly="readonly" defaultValue={!cartella.dataEmissioneCartella ? "" : moment(new Date(cartella.dataEmissioneCartella)).format('DD-MM-YYYY')} />
                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className="form-group">
                                    <b>Data Notifica </b>
                                    <input type="text" className="form-control" readOnly="readonly" defaultValue={!cartella.dataNotificaCartella ? "" : moment(new Date(cartella.dataNotificaCartella)).format('DD-MM-YYYY')} />
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="form-group">
                                    <b>Modalita Notifica </b>
                                    <input type="text" className="form-control disable" readOnly="readonly" defaultValue={!cartella.modalitaNotifica ? "" : cartella.modalitaNotifica} />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-6 col-md-4">
                                <div className="form-group">
                                    <b >Data Annullamento Cart.</b>
                                    <input type="text" className="form-control" readOnly="readonly" defaultValue={!cartella.dataAnnullamentoCartella ? "" : moment(new Date(cartella.dataAnnullamentoCartella)).format('DD-MM-YYYY')} />
                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className="form-group">
                                    <b>Importo Dovuto</b>
                                    <input type="text" className="form-control disable" readOnly="readonly" defaultValue={!cartella.importoDovuto ? "" : cartella.importoDovuto} />
                                </div>
                            </div>
                            <div className="col-6 col-md-2">
                                <div className="form-group">
                                    <b>Importo Versato</b>
                                    <input type="text" className="form-control disable" readOnly="readonly" defaultValue={!cartella.importoVersato ? "" : cartella.importoVersato} />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-6 col-md-4">
                                <div className="form-group">
                                    <b >Residuo Da Versare Att.</b>
                                    <input type="text" className="form-control disable" readOnly="readonly" defaultValue={!cartella.residuoDaVersareAttualizzato ? "" : cartella.residuoDaVersareAttualizzato} />
                                </div>
                            </div>
                            <div className="col-6 col-md-2">
                                <div className="form-group">
                                    <b>Include Ravvedimento</b>

                                    {(cartella.flagResiduoDaVersareAttualizzatoIncludeRavvedimento == 1) ? <svg className="icon icon-success  ">  <use href={`${iconSprite}#it-check-circle`} /></svg>
                                        :
                                        <svg className="icon icon-danger  ">  <use href={`${iconSprite}#it-close-circle`} /></svg>}
                                </div>
                            </div>
                            <div className="col-6 col-md-2">
                                <div className="form-group">
                                    <b>Anno Imposta</b>
                                    <input type="text" className="form-control disable" readOnly="readonly" defaultValue={!cartella.annoImposta ? "" : cartella.annoImposta} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4 col-md-4">
                                <div className="form-group">
                                    <b >Tipo Servizio</b>
                                    <input type="text" className="form-control disable" readOnly="readonly" defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 ">
                                <div className="form-group text-center">
                                    <br />


                                    <button type="button" className="btn btn-primary">Paga Ora</button>

                                </div>

                            </div>

                        </div>












                    </>
                )}
            </>
        );
    }
}

export default Cartella;
