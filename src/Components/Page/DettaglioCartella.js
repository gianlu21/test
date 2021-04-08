import Cookies from 'universal-cookie';
import React from 'react';
import ListApi from "../Utility/ListApi";
import configuration from "../../config.json";
import ListaPagamentiAttesi from '../Objects/ListaPagamentiAttesi';
import ListaPagamentiEffettuati from '../Objects/ListaPagamentiEffettuati';
import TabellaFascicolo from '../Objects/TabellaFascicolo';

import Cartella from '../Objects/Cartella';
class DettaglioCartella extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            api_token: cookies.get('api_token'),
            pkCartella: "",
            pagamentiEffettuati: [],
            fiscalCode: cookies.get('user_profile').FiscalCode,
            pagamentiDovuti: [],
            cartelleCorrelate: [],
            cartella: {
                pkCartella: "F052-Riscossione-Polizia Locale-2938-6-10063",
                nomeUnivocoCartella: "Avviso di fermo N.3332",
                nomeFileCartella: "",
                dataEmissioneCartella: "2019-09-17T00:00:00",
                dataNotificaCartella: "2019-09-27T00:00:00",
                modalitaNotifica: "Raccomandata AG",
                dataAnnullamentoCartella: null,
                importoDovuto: 130.48,
                importoVersato: 50,
                residuoDaVersareAttualizzato: 80.48,
                flagPagabile: 1,
                flagResiduoDaVersareAttualizzatoIncludeRavvedimento: 1,
                idCartellaInVerticale: "F052-Riscossione-Polizia Locale-2938-6-10063",
                fileTipoMime: "",
                pkTipoCartella: "",
                annoImposta: "2019",
                fkGruppoCartella: null,
                cfpiva: "BLFCMD72H30C034L",
                flagConservazione: 0
            }
        };
    }


    componentDidMount() {

        const queryString = require('query-string');
        // const { match: { params } } = this.props;
        const pKCartellaParsed = queryString.parse(this.props.match.params.id);
        this.setState({
            pkCartella: pKCartellaParsed.id,
        });


        if (this.state.fiscalCode) {
            var data = JSON.stringify({ "pkCartella": this.state.pkCartella, "pkTipoCartella": "", "codiceEnte": "", "flagRefresh": 0 });
            ListApi.getPost(this.state.api_token, configuration.URL_GET_PAGAMENTI_DOVUTI, data)
                .then((response) => {


                    this.setState({
                        pagamentiDovuti: response.data.pagamentiDovuti,

                    });

                })
                .catch((error) => {
                    console.log(error)
                    this.setState({

                    });
                });



            data = JSON.stringify({ "cfPiva": this.state.fiscalCode, "codiceEnte": "", "flagRefresh": 0 });
            ListApi.getPost(this.state.api_token, configuration.URL_GET_PAGAMENTI_EFFETTUATI_CONTRIBUENTE, data)
                .then((response) => {


                    this.setState({
                        pagamentiEffettuati: response.data.pagamentiEffettuati,

                    });

                })
                .catch((error) => {
                    console.log(error)
                    this.setState({

                    });
                });

            console.clear();
            data = JSON.stringify({ "pkCartella": this.state.pkCartella, "pkTipoCartella": "" });
            ListApi.getPost(this.state.api_token, configuration.URL_GET_CARTELLE_CORRELATE, data)
                .then((response) => {


                    this.setState({
                        cartelleCorrelate: response.data.cartelleCorrelate,

                    });

                })
                .catch((error) => {
                    console.log(error)
                    this.setState({

                    });
                });








        }




    }



    render() {


        const getPdf = async () => {
            var data = JSON.stringify({ pkCartella: this.state.pkCartella, pkTipoCartella: "" });

            ListApi.getFile(
                this.state.api_token,
                configuration.URL_GET_DOWNLOAD,
                data
            )
                .then(function (response) {
                    var b64 = response.data.binaryFile;

                    var a = window.document.createElement("a");
                    a.href = "data:application/octet-stream;base64," + b64;
                    a.download = response.data.nomeFile;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };




        return (



            <div className="container my-4">
                {this.props.carrello2}
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card-wrapper card-space">
                            <div className="card card-bg">
                                <div className="card-body">


                                    <div className="row">


                                        <div className="col-2"><h3 className="card-title">  CF/P.IVA:     </h3></div>
                                        <div className="col-8">
                                            <input className="form-control" type="text" id="input-text-disabled" disabled value={this.state.fiscalCode} />
                                        </div>
                                        <div className="col-2 text-right">
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-sm"
                                                onClick={() => getPdf()}
                                            >
                                                Scarica Cartella
                                      </button>
                                        </div>
                                    </div>




                                    <div id="collapseDiv1" className="collapse-div" role="tablist">
                                        <div className="collapse-header" id="heading0">
                                            <button data-toggle="collapse" data-target="#collapse0" aria-expanded="true" aria-controls="collapse0">
                                                Dettaglio cartella
    </button>
                                        </div>
                                        <div id="collapse0" className="collapse show" role="tabpane0" aria-labelledby="heading0">
                                            <div className="collapse-body">
                                                <Cartella>{this.state.cartella}</Cartella>
                                            </div>
                                        </div>


                                        <div className="collapse-header" id="heading1">
                                            <button data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                Pagamenti Dovuti
    </button>
                                        </div>
                                        <div id="collapse1" className="collapse " role="tabpanel" aria-labelledby="heading1">
                                            <div className="collapse-body">
                                                <ListaPagamentiAttesi carrello3={this.props.carrello2}>{this.state.pagamentiDovuti}</ListaPagamentiAttesi>
                                            </div>
                                        </div>
                                        <div className="collapse-header" id="heading2">
                                            <button data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                Pagamenti Effettuati
    </button>
                                        </div>
                                        <div id="collapse2" className="collapse " role="tabpanel" aria-labelledby="heading2">
                                            <div className="collapse-body">
                                                <ListaPagamentiEffettuati>{this.state.pagamentiEffettuati}</ListaPagamentiEffettuati>    </div>
                                        </div>


                                        <div className="collapse-header" id="heading3">
                                            <button data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                                Cartelle Correlate
    </button>
                                        </div>
                                        <div id="collapse3" className="collapse " role="tabpanel" aria-labelledby="heading3">
                                            <div className="collapse-body">
                                                <TabellaFascicolo table={false}>{this.state.cartelleCorrelate}</TabellaFascicolo> </div>
                                        </div>




                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


        );
    }
}


export default DettaglioCartella;




