import React, { Component } from 'react'
import './style.css'

import { Table } from 'react-bootstrap'

import UsuarioService from '../../../service/UsuarioService';

class ListUsuarioComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            usuario: []
        }
        this.addUsuario = this.addUsuario.bind(this);
        this.editUsuario = this.editUsuario.bind(this);
        this.deleteUsuario = this.deleteUsuario.bind(this);
    }

    deleteUsuario(id) {
        UsuarioService.deleteUsuario(id).then( res => {
            this.setState({ usuario: this.state.usuario.filter(usuario => usuario.id !== id) });
        })
    }

    editUsuario(id){
        this.props.history.push(`/add-usuario/${id}`);
    }
    componentDidMount() {
        UsuarioService.getUsuario().then( (res) => {
            this.setState({ usuario: res.data});
        });
    }

    addUsuario() {
        this.props.history.push('/add-usuario/_add');
    }

    viewUsuario(id){
        this.props.history.push(`/view-usuario/${id}`);
    }

    cancel(){
        this.props.history.push('/home');
    }

    render(){
        return(
            <div className= 'container corpo_body'>
                <h2 className='text-center'>Lista de Usuários Cadastrados</h2>
                    <button className='btn btn-primary' onClick={this.addUsuario}>Adicionar Usuário</button>
                <br/>
                <br/>

                <div className='container'>
                    <Table className='table table-striped table-bordered' responsive="sm">
                        <thead>
                            <tr>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Endereço</th>
                            <th>Telefone</th>
                            <th>Cupom</th>
                            <th></th>
                            <th>Ações</th>
                            <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.usuario.map(
                                    usuario =>
                                    <tr key={usuario.id}>
                                        <td> {usuario.nome} </td>
                                        <td> {usuario.cpf} </td>
                                        <td> {usuario.endereco} </td>
                                        <td> {usuario.telefone} </td>
                                        <td> {usuario.id_viagem} </td>
                                        <td>
                                            <button onClick={ () => this.editUsuario(usuario.id)} className="btn btn-primary">Atualizar</button>
                                        </td>
                                        <td>
                                        <button style={{ marginLeft: "10px"}} onClick={ () => this.deleteUsuario(usuario.id)} className="btn btn-danger">Excluir</button>
                                         </td>
                                         <td>
                                            <button style={{ marginLeft: "10px"}} onClick={ () => this.viewUsuario(usuario.id)} className="btn btn-secondary">Visualizar</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </Table>

                    <button className='btn btn-danger btn_cancelar' onClick={this.cancel.bind(this)}>Cancelar</button>

                </div>

            </div>
        )
    }
}

export default ListUsuarioComponent