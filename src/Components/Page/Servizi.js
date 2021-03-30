

import Cookies from 'universal-cookie';
import React from 'react';




class Servizi extends React.Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();

        this.state = {
            api_token: cookies.get('api_token')
        };
    }







    render() {
        return (

            <main role="main">



                <div className="container my-4">

                    <div className="row text-center">

                        <div className=" col-lg-6">

                            <div className="card-wrapper card-space">
                                <div className="card card-bg">
                                    <div className="card-body">
                                        <h5 className="card-title">Fascicolo Documentale</h5>
                                        <p className="card-text">Accedendo a questa sezione potrai visualizzare il tuo fascicolo documentale online</p>
                                        <a href="/fascicolo" className="btn btn-primary">Vai <span className="badge badge-warning">9</span></a>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=" col-lg-6">

                            <div className="card-wrapper card-space">
                                <div className="card card-bg">
                                    <div className="card-body">
                                        <h5 className="card-title">Pagamenti Attesi</h5>
                                        <p className="card-text">Accedendo a questa sezione potrai visualizzare l’elenco dei pagamenti attesi dall’ente da parte tua e procedere al relativo pagamento</p>
                                        <a href="/pagamentiattesi" className="btn btn-primary">Vai  <span className="badge badge-warning">9</span></a>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className=" col-lg-6">

                            <div className="card-wrapper card-space">
                                <div className="card card-bg">
                                    <div className="card-body">
                                        <h5 className="card-title">Pagamento Spontaneo</h5>
                                        <p className="card-text">Accedendo a questa sezione potrai eseguire un pagamento spontaneo a favore dell’Ente </p>
                                        <a href="/#" className="btn btn-primary">Vai </a>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className=" col-lg-6">

                            <div className="card-wrapper card-space">
                                <div className="card card-bg">
                                    <div className="card-body">
                                        <h5 className="card-title">Pagamenti Eseguiti</h5>
                                        <p className="card-text">Accedendo a questa sezione potrai visualizzare l’elenco dei pagamenti effettuati e scaricare le ricevute di pagamento</p>
                                        <a href="/pagamentieffettuati" className="btn btn-primary">Vai</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>






                </div>





            </main>


        );
    }
}


export default Servizi;




