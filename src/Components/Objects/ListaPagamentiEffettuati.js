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

class ListaPagamentiEffettuati extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            api_token: cookies.get('api_token'),
            fascicolo: props.children
        };

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


        let conuntAcounr = 0;

        function counter() {
            conuntAcounr += 1;
        }



        return (
            <>

                {this.props.children && <>

                    <div id="collapseDiv1-lft" className="collapse-div collapse-left-icon" role="tablist">

                        {Array.isArray(this.props.children) && this.props.children.map((obbj) => (
                            <div key={obbj.pkPagamento}>



                                <div class="row">
                                    <div class="col-12 col-lg-12">

                                        <div class="card-wrapper card-space">
                                            <div class="card card-bg">
                                                <div class="card-body">
                                                    <h5 class="card-title">{obbj.pkPagamento} - <b>Numero rata: </b> {obbj.numeroRata}</h5><hr />
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <b>Data Pagamento: </b> {moment(new Date(obbj.dataPagamento)).format('DD-MM-YYYY')}
                                                        </div>
                                                        <div className="col-4">
                                                            <b>Metodo di pagamento: </b> {obbj.metodoDiPagamento ? obbj.metodoDiPagamento : "Non pervenuto"}
                                                        </div>
                                                        <div className="col-2">
                                                            <b>Importo: €</b> {obbj.importo}
                                                        </div>
                                                        <div className="col-2">
                                                            <button type="button" class="btn btn-primary" onClick={() => getPdf(obbj.pkCartella)}>Scarica ricevuta</button>

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

export default ListaPagamentiEffettuati;


