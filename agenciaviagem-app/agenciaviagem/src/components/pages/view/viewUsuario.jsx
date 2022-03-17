import React, {Component} from 'react'

import UsuarioService from '../../../service/UsuarioService'

import './style.css'

class ViewUsuarioComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            usuario: {}
        }
    }

    componentDidMount(){
        UsuarioService.getUsuarioById(this.state.id).then( res => {
            this.setState({ usuario: res.data});
        })
    }

    voltar(){
        this.props.history.push('/lista');
    }

    render(){
        return(
            <div className='container corpo_body'>
                <br/>
                <br/>
                <div className='container card col-md-6 offset-md-3'>
                    <h3 className='text-center'>Informações do Usuário</h3>
                    
                    <div className='row'>
                        <label><b>Nome: </b> {this.state.usuario.nome} </label>
                        <br/>    
                    </div>

                    <div className='row'>
                        <label><b>CPF: </b> {this.state.usuario.cpf} </label>
                        <br/>
                    </div>

                    <div className='row'>
                        <label><b>Endereço: </b> {this.state.usuario.endereco} </label>
                        <br/>
                    </div>

                    <div className='row'>
                        <label><b>Telefone: </b> {this.state.usuario.telefone} </label>
                        <br/>
                    </div>

                    <div className='row'>
                        <label><b>Cupom: </b> 
                         {this.state.usuario.id_viagem} 
                        </label>
                    </div>
                </div>
                <br/><br/>

                <button className="btn btn-danger btn_voltar" onClick={this.voltar.bind(this)}>Voltar</button>

            </div>
        )
    }
}

export default ViewUsuarioComponent