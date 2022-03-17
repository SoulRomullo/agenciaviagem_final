import React, { Component } from 'react'
import './style.css'
import { Form } from 'react-bootstrap'

import UsuarioService from '../../../service/UsuarioService';

class CreateUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            cpf: '',
            endereco: '',
            telefone: ''
        }

        this.changeNomeHandler = this.changeNomeHandler.bind(this)
        this.changeCpfHandler = this.changeCpfHandler.bind(this)
        this.saveOrUpdateUsuario = this.saveOrUpdateUsuario.bind(this)
    }
    componentDidMount() {

        if (this.state.id === '_add') {
            return
        } else {
            UsuarioService.getUsuarioById(this.state.id).then((res) => {
                let usuario = res.data;
                this.setState({
                    nome: usuario.nome,
                    cpf: usuario.cpf,
                    endereco: usuario.endereco,
                    telefone: usuario.telefone,
                    id_viagem: usuario.id_viagem
                });
            });
        }
    }

    saveOrUpdateUsuario = (e) => {
        e.preventDefault();
        let usuario = { nome: this.state.nome, cpf: this.state.cpf, endereco: this.state.endereco, telefone: this.state.telefone, id_viagem: this.state.id_viagem };
        console.log('usuario =>' + JSON.stringify(usuario));

        if (this.state.id === '_add') {
            UsuarioService.createUsuario(usuario).then(res => {
                this.props.history.push('/usuario');
            });
        } else {
            UsuarioService.updateUsuario(usuario, this.state.id).then(res => {
                this.props.history.push('/usuario');
            });
        }
    }

    changeNomeHandler = (event) => {
        this.setState({ nome: event.target.value });
    }

    changeCpfHandler = (event) => {
        this.setState({ cpf: event.target.value });
    }

    changeEnderecoHandler = (event) => {
        this.setState({ endereco: event.target.value });
    }

    changeTelefoneHandler = (event) => {
        this.setState({ telefone: event.target.value });
    }
    changeId_viagemHandler = (event) => {
        this.setState({ id_viagem: event.target.value });
    }

    atualizar(){
        this.props.history.push('/lista')
    }

    cancel() {
        this.props.history.push('/home')
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <p>Adicionar Usuário</p>
        } else {
            return <p>Atualizar Cadastro</p>
        }

    }

    render() {
        return (
            <div className='container form_body'>
                <h2 className='pt-4'>Pessoas</h2>
                <p className='txtAdicionar'>{this.getTitle()}</p>

                <Form.Group className='container mb-5 col-sm-5' controlId='formulario'>
                    <Form.Label className='mb-2'><b>Nome</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='nome' placeholder='Insira seu Nome'
                        value={this.state.nome} onChange={this.changeNomeHandler}></Form.Control>

                    <Form.Label className='mb-2'><b>CPF</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='cpf' placeholder='Informe seu CPF'
                        value={this.state.cpf} onChange={this.changeCpfHandler}></Form.Control>

                    <Form.Label className='mb-2'><b>Endereço</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='endereco'
                        value={this.state.endereco} onChange={this.changeEnderecoHandler}></Form.Control>

                    <Form.Label className='mb-2'><b>Telefone</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='telefone'
                        value={this.state.telefone} onChange={this.changeTelefoneHandler}></Form.Control>

                    <Form.Label className='mb-2'><b>Cupom</b></Form.Label>
                    <Form.Control className='mb-2' type='text' name='id_viagem'
                        value={this.state.id_viagem} onChange={this.changeId_viagemHandler}></Form.Control>
                </Form.Group>

                <hr />

                <button className='btn btn-success mb-5 mt-5 btnSalvar' onClick={this.saveOrUpdateUsuario}>Salvar</button>
                <button className='btn btn-danger mb-5 mt-5 btnSalvar' onClick={this.cancel.bind(this)}>Cancelar</button>
                <button className='btn btn-warning mb-5 mt-5 btnSalvar' onClick={this.atualizar.bind(this)}>Atualizar</button>
            </div>
        );
    }

}

export default CreateUsuarioComponent