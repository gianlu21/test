import React from "react";
import Cookies from 'universal-cookie';
import 'bootstrap-italia/dist/js/bootstrap-italia.bundle.min';


import ListApi from '../Utility/ListApi'
import configuration from '../../config.json'


import TabellaFascicolo from '../Objects/TabellaFascicolo'

class ElencoFascicolo extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            fascicolo: [],
            defaultEntity: [],
            api_token: cookies.get('api_token'),
            fiscalCode: cookies.get('user_profile').FiscalCode,
            loading: false,
            listaLinkUtente: [
                { testo: "Home", url: "/home" },
                { testo: "Domande Frequenti", url: "/faq" },
                { testo: "Serve Aiuto?", url: "/help" }
            ]
        };





    }



    componentDidMount() {
        if (this.state.fiscalCode) {
            var data = JSON.stringify({ "cfPiva": this.state.fiscalCode, "codiceEnte": "", "flagRefresh": 0 });
            ListApi.getPost(this.state.api_token, configuration.URL_GET_FASCICOLO, data)
                .then((response) => {

                    this.setState({
                        fascicolo: response.data.fascicolo,
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

                <br></br>
                <div className="col-12">


                    <h3 style={{ textAlign: '' }}>Fascicolo del Contribuente: <b>{this.props.user.LastName} {this.props.user.FirstName} - {this.props.user.FiscalCode}</b></h3><br></br>

                    {this.state.loading ? <TabellaFascicolo table={true} >{this.state.fascicolo}</TabellaFascicolo> :
                        <div className="col-12">
                            <div className="trasparente">
                                <div className="progress-spinner progress-spinner-active spinner">
                                    <span className="sr-only">Caricamento...</span>
                                </div>
                            </div>
                        </div>
                    }


                </div>



            </div>
        );
    }
}


export default ElencoFascicolo;