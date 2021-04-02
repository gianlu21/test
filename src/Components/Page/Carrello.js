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


class Carrello extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            api_token: cookies.get('api_token'),
            fiscalCode: cookies.get('user_profile').FiscalCode,
            fascicolo: props.children,
            carrello: []


        };

        if (this.state.api_token) {
            ListApi.getData(this.state.api_token, configuration.URL_GET_CARRELLO)
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        carrello: response.data

                    });

                })
                .catch((error) => {
                    console.log(error)
                });
        }

    }

    removeItems = (id) => {
        ListApi.deleteData(this.state.api_token, configuration.URL_GET_CARRELLO + "/" + id)
            .then((response) => {
                console.log(response.data);
                const newList = this.state.carrello.filter((item) => item.Id !== id);
                console.log("remove", newList)
                this.setState({
                    carrello: newList

                });
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            });

    }



    render() {

        let importoTotale = this.state.carrello.reduce(function (prev, current) {
            return prev + +current.ImportoDovuto
        }, 0);

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
                <div className="container my-4 text-center">

                    {this.state.carrello.length > 0 ? <>


                        {Array.isArray(this.state.carrello) && this.state.carrello.map((obbj, index) => (

                            <>


                                <div className="card-wrapper card-space text-left">

                                    <div class="card card-bg" key={index}>
                                        <div class="card-header">
                                            <b>Comune: {obbj.Comune}</b>
                                        </div>
                                        <div class="card-body">
                                            <div className="row">
                                                <div className="col-4"><h4 class="card-title">{obbj.PkRata}</h4></div>
                                                <div className="col-4"><h5><b>Numero rata: </b> {obbj.NumeroRata}</h5></div>
                                                <div className="col-2"><b>Importo: €</b> {obbj.ImportoDovuto}</div>
                                                <div className="col-2"><button type="button" class="btn btn-danger" onClick={() => this.removeItems(obbj.Id)}>Elimina</button></div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </>

                        ))



                        }
                        <div>
                            <div className="col-12 text-right">
                                <b>Totale: € {importoTotale}</b>
                            </div>
                        </div>
                        <div className="row text-center">

                            <div className="col-6">
                                <button type="button" class="btn btn-primary">Scarica avvisa cartacei</button>
                            </div>
                            <div className="col-6">
                                <button type="button" class="btn btn-primary">Paga online</button>
                            </div>


                        </div>



                    </> :

                        <h3>Il tuo carrello è vuoto.</h3>}
                </div>


            </>
        );
    }
}

export default Carrello;


