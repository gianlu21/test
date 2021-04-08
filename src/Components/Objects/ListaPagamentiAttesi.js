import React from "react";
import Cookies from 'universal-cookie';
import moment from 'moment'
import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import iconSprite from "bootstrap-italia/dist/svg/sprite.svg";
import { Link } from 'react-router-dom';

import ListApi from "../Utility/ListApi"
import configuration from '../../config.json'

import FlexWebchat from "../../FlexWebchat";

import PagoPA from "../../Img/pagopa-logo.png";

import Enumerable from 'linq';


class ListaPagamentiAttesi extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            api_token: cookies.get('api_token'),
            fascicolo: props.children,


        };

    }

    addItemsToCart = (id) => {

        let arr = this.props.children;

        let obj = arr.find(o => o.pkRata === id);


        var data = JSON.stringify({ "Id": 1, "PkRata": obj.pkRata, "Comune": "altamura", "NumeroRata": obj.numeroRata, "ImportoDovuto": obj.importoDovuto, "CartID": 1 });
        ListApi.getPost(this.state.api_token, configuration.URL_GET_CARRELLO, data)
            .then((response) => {
                this.props.carrello3();
                alert("Nuovo elemento aggiunto al carrello")
            })
            .catch((error) => {
                console.log(error)
                this.setState({


                });
            });
    }







    render() {



        const getPdf = async (idCartella) => {
            var data = JSON.stringify({ pkCartella: idCartella, pkTipoCartella: "" });

            ListApi.getFile(this.state.api_token, configuration.URL_GET_DOWNLOAD, data).then(function (response) {
                var b64 = response.data.binaryFile


                var a = window.document.createElement('a');
                a.href = 'data:application/octet-stream;base64,' + b64;
                a.download = response.data.nomeFile;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
                .catch(function (error) {
                    console.log(error);
                });
        }



        return (
            <>

                {this.props.children && <>
                    <div id="collapseDiv1-lft" className="collapse-div collapse-left-icon" role="tablist">

                        {Array.isArray(this.props.children) && this.props.children.map((obbj, index) => (
                            <div key={obbj.pkRata}>



                                <div className="row">
                                    <div className="col-12 col-lg-12">

                                        <div className="card-wrapper card-space">
                                            <div className="card card-bg">
                                                <div className="card-body">
                                                    <h5 className="card-title">{obbj.pkRata} - <b>Numero rata: </b> {obbj.numeroRata}</h5><hr />
                                                    <div className="row">
                                                        <div className="col-sm-8 col-lg-4">
                                                            <div className="row"><b>Data Pagamento: </b> {moment(new Date(obbj.dataScadenza)).format('DD-MM-YYYY')}</div>
                                                        </div>
                                                        {/* <div className="col-sm-6 col-lg-4">
                                                            <b>Metodo di pagamento: </b> {obbj.metodoDiPagamento ? obbj.metodoDiPagamento : "Non pervenuto"}
                                                        </div> */}
                                                        <div className="col-sm-4 col-lg-4">
                                                            <div className="row"><b>Importo: €</b> {obbj.importoDovuto}</div><br></br>
                                                        </div>
                                                        <div className="row col-sm-12 ">
                                                            <div className="col-4">
                                                                <div className="row"><button type="button" className="btn btn-primary">Paga Ora</button></div>

                                                            </div>
                                                            <div className="col-6">
                                                                <div className="row"><button type="button" className="btn btn-primary" onClick={() => this.addItemsToCart(obbj.pkRata)}>Aggiungi al carrello</button></div>

                                                            </div>
                                                            <div className="col-2">
                                                                <div className="row"><button type="button" className="btn btn-secondary">Dettaglio</button></div>

                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>


                        ))

                        }
                    </div>











                </>}
            </>
        );
    }
}

export default ListaPagamentiAttesi;


