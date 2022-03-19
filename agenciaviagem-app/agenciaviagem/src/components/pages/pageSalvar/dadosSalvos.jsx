import React, {Component} from 'react'
import './style.css'

class DadosSalvar extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    voltar() {
        this.props.history.push("/home")
    }

    render(){
        return(
            <div className='container dados_salvo'>
                <h2>Dados inseridos com Sucesso!</h2>
                
                <button className='btn btn-warning ' onClick={this.voltar.bind(this)}>Voltar</button>
            </div>
        )
    }
}

export default DadosSalvar