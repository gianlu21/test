import React from "react";
import Cookies from "universal-cookie";
import moment from "moment";
import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import iconSprite from "bootstrap-italia/dist/svg/sprite.svg";
import { Link } from "react-router-dom";

import ListApi from "../Utility/ListApi";
import configuration from "../../config.json";


class TabellaFascicolo extends React.Component {
    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            api_token: cookies.get("api_token"),
            fascicolo: props.children,
        };
    }

    render() {
        const getPdf = async (idCartella) => {

            var data = JSON.stringify({ pkCartella: idCartella, pkTipoCartella: "" });

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
            <>
                {console.log(this.props.children)}
                {" "}
                {this.props.children && (
                    <>


                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive ">
                                        <table className="table  table-striped  ">
                                            <thead className="table-primary">
                                                <tr>
                                                    <th
                                                        className={"align-middle "}
                                                        scope="col"
                                                    >
                                                        <h3>Cartella</h3>
                                                    </th>

                                                    <th className={"align-middle d-md-block  d-none d-lg-block"}>
                                                        <h3> Scarica/Info</h3>


                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Array.isArray(this.props.children) &&
                                                    this.props.children.map((obbj) => (
                                                        <tr key={obbj.pkCartella}>
                                                            <td>
                                                                <div className="text-left">
                                                                    <h4>{obbj.nomeUnivocoCartella}</h4>

                                                                    <div className="row">
                                                                        <div className="col-6"><b>Data Emissione: </b> {moment(
                                                                            new Date(obbj.dataEmissioneCartella)
                                                                        ).format("DD-MM-YYYY")}</div>
                                                                        <div className="col-6"><b>Data Notifica: </b> {moment(
                                                                            new Date(obbj.dataEmissioneCartella)
                                                                        ).format("DD-MM-YYYY")}</div>


                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">

                                                                        <div className="col-8"><b>Descrizione: </b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                                                        <div className="col-4">
                                                                            <div className="row"><b>Anno Imposta: </b> {obbj.annoImposta}</div>
                                                                            <div className="row"><b>Importo Dovuto: </b> {obbj.importoDovuto}</div>
                                                                            <div className="row"><b>Importo Versato: </b> {obbj.importoVersato}</div>
                                                                        </div>

                                                                        <div className="col-12 d-none d-sm-block d-md-none d-block d-sm-none">
                                                                            <Link to={`fascicolo/id=${obbj.pkCartella}`}
                                                                                style={{ color: "black" }}
                                                                            >  <button type="button" className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>Dettaglio</button>

                                                                            </Link>
                                                                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => getPdf(obbj.pkCartella)}>Scarica</button>
                                                                        </div>
                                                                    </div>
                                                                </div>



                                                            </td>
                                                            <td className="text-center  d-none d-md-block d-lg-block">

                                                                <Link to={`fascicolo/id=${obbj.pkCartella}`}
                                                                    style={{ color: "black" }}
                                                                >  <button type="button" className="btn btn-primary btn-sm" style={{ marginRight: "5px" }}>Dettaglio</button>

                                                                </Link>
                                                                <button type="button" className="btn btn-secondary btn-sm" onClick={() => getPdf(obbj.pkCartella)}>Scarica</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
                }
            </>
        );
    }
}

export default TabellaFascicolo;