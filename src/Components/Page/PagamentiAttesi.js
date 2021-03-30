import React from "react";
import Cookies from 'universal-cookie';
import 'bootstrap-italia/dist/js/bootstrap-italia.bundle.min';


import ListApi from '../Utility/ListApi'
import configuration from '../../config.json'
import ListaPagamentiAttesi from "../Objects/ListaPagamentiAttesi";




class PagamentiAttesi extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            pagamentiDovuti: [],
            api_token: cookies.get('api_token'),
            fiscalCode: cookies.get('user_profile').FiscalCode,
            loading: false


        };





    }



    componentDidMount() {
        if (this.state.fiscalCode) {
            var data = JSON.stringify({ "pkCartella": "", "pkTipoCartella": "", "codiceEnte": "", "flagRefresh": 0 });
            ListApi.getPost(this.state.api_token, configuration.URL_GET_PAGAMENTI_DOVUTI, data)
                .then((response) => {
                    console.log(response.data)

                    this.setState({
                        pagamentiDovuti: response.data.pagamentiDovuti,
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

                    <h2 style={{ textAlign: 'center' }}>Pagamenti Attesi</h2><br /><br />
                    <div className="col-12">

                        {this.state.loading ? <ListaPagamentiAttesi>{this.state.pagamentiDovuti}</ListaPagamentiAttesi> :
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


export default PagamentiAttesi;
