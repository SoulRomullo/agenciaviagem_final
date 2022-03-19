import React, {Component} from 'react'
import './style.css'

class ContatoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className='container body_contato'>
                <h1>Agência de Viagem</h1>
                <h3>Entre com contato</h3>

                <p>Av Paulista<br/>
                cep.987654-370<br/>
                <u>Telefone:</u> (11)98765-4321</p>

                <b>Suporte: </b><a href="/#" type="email">agencia_viagem@exemple.com</a><br/>
                <b>Marketing: </b><a href='/#' type='email'>marketing_viagem@exemple.com</a>
               
            </div>
        )
    }
}

export default ContatoComponent