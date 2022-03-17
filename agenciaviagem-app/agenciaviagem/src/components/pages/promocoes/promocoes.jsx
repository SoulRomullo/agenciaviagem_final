import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import imgBrasilia from '../../imagens/imgBrasilia.jpg'
import imgSaoPaulo from '../../imagens/imgSaoPaulo.jpg'
import imgRioDeJaneiro from '../../imagens/imgRioDeJaneiro.jpg'
import imgFortaleza from '../../imagens/imgFortaleza.jpg'
import imgMaceio from '../../imagens/imgMaceio.jpg'
import imgPernambuco from '../../imagens/imgPernambuco.jpg'

class PromocoesComponent extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <article className='container page_body'>

                    <h1>Promoções</h1>

                    <Link className='btn btn-light' to="/lista">Cadastrar Cupom &raquo;</Link>                    

                    <div className='container box_Img'>

                        <img src={imgRioDeJaneiro} alt="imagem" className="img-fluid imgCidades"/>
                        <h2>Rio de Janeiro</h2>
                        <p><b>Copie seu código e garanta a sua promoção.</b></p>
                        <p>Para garantir sua promoção copie o código e<br/>
                        coloque no seu cadastro para você adquirir a promoção.
                        </p>
                        <h3><b>012522</b></h3>

                        <img src={imgBrasilia} alt="imagem" className="img-fluid imgCidades"/>
                        <h2>Brasília</h2>
                        <p><b>Copie seu código e garanta a sua promoção.</b></p>
                        <p>Para garantir sua promoção copie o código e<br/>
                        coloque no seu cadastro para você adquirir a promoção.
                        </p>
                        <h3><b>012533</b></h3>

                        <img src={imgFortaleza} alt="imagem" className="img-fluid imgCidades"/>
                        <h2>Fortaleza</h2>
                        <p><b>Copie seu código e garanta a sua promoção.</b></p>
                        <p>Para garantir sua promoção copie o código e<br/>
                        coloque no seu cadastro para você adquirir a promoção.
                        </p>
                        <h3><b>012544</b></h3>

                        <img src={imgMaceio} alt="imagem" className="img-fluid imgCidades"/>
                        <h2>Macéio</h2>
                        <p><b>Copie seu código e garanta a sua promoção.</b></p>
                        <p>Para garantir sua promoção copie o código e<br/>
                        coloque no seu cadastro para você adquirir a promoção.
                        </p>
                        <h3><b>012555</b></h3>

                        <img src={imgPernambuco} alt="imagem" className="img-fluid imgCidades"/>
                        <h2>Pernambuco</h2>
                        <p><b>Copie seu código e garanta a sua promoção.</b></p>
                        <p>Para garantir sua promoção copie o código e<br/>
                        coloque no seu cadastro para você adquirir a promoção.
                        </p>
                        <h3><b>012566</b></h3>

                        <img src={imgSaoPaulo} alt="imagem" className="img-fluid imgCidades"/>
                        <h2>São Paulo</h2>
                        <p><b>Copie seu código e garanta a sua promoção.</b></p>
                        <p>Para garantir sua promoção copie o código e<br/>
                        coloque no seu cadastro para você adquirir a promoção.
                        </p>
                        <h3><b>012577</b></h3>

                    </div>

                </article>
            </div>
        )
    }
}

export default PromocoesComponent;
