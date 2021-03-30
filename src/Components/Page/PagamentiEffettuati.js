import React from "react";
import Cookies from 'universal-cookie';
import 'bootstrap-italia/dist/js/bootstrap-italia.bundle.min';


import ListApi from '../Utility/ListApi'
import configuration from '../../config.json'
import ListaPagamentiEffettuati from "../Objects/ListaPagamentiEffettuati";




class PagamentiEffettuati extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            pagamentiEffettuati: [],
            api_token: cookies.get('api_token'),
            fiscalCode: cookies.get('user_profile').FiscalCode,
            loading: false

        };





    }



    componentDidMount() {
        if (this.state.fiscalCode) {
            var data = JSON.stringify({ "cfPiva": this.state.fiscalCode, "codiceEnte": "", "flagRefresh": 0 });
            ListApi.getPost(this.state.api_token, configuration.URL_GET_PAGAMENTI_EFFETTUATI_CONTRIBUENTE, data)
                .then((response) => {
                    console.log(response.data)

                    this.setState({
                        pagamentiEffettuati: response.data.pagamentiEffettuati,
                        loading: true
                    });

                })
                .catch((error) => {
                    console.log(error)
                    this.setState({
                        loading: true
                    });
                });
        }


    }



    render() {



        return (
            <div className="container my-4">


                <div className="col-12">

                    <h2 style={{ textAlign: 'center' }}>Pagamenti Effettuati</h2><br /><br />

                    <div>
                        <form>
                            <div>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <div className="bootstrap-select-wrapper">
                                            <label>Periodo</label>
                                            <select title="Scegli un'opzione">
                                                <option value="Value 1">Ultimo mese</option>
                                                <option value="Value 2">Ultimi tre mesi</option>
                                                <option value="Value 3">Ultimo anno</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="form-group col text-center">
                                        <button type="submit" className="btn btn-primary">
                                            Cerca </button>
                                    </div>

                                </div>


                            </div>

                        </form>
                    </div>
                    <div className="col-12">

                        {this.state.loading ? <ListaPagamentiEffettuati>{this.state.pagamentiEffettuati}</ListaPagamentiEffettuati> :
                            <div class="col-12">
                                <div class="trasparente">
                                    <div class="progress-spinner progress-spinner-active spinner">
                                        <span class="sr-only">Caricamento...</span>
                                    </div>
                                </div>



                            </div>}

                    </div>

                </div>



            </div>
        );
    }
}


export default PagamentiEffettuati;
