import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavbarMenu from '../src/components/navbar/NavbarMenu'
import Footer from '../src/components/footer/Footer'
import HomeComponent from './components/pages/index/home';
import CreateUsuarioComponent from './components/pages/cadastrar/cadastrar'
import ContatoComponent from './components/pages/contato/contato'
import PromocoesComponent from './components/pages/promocoes/promocoes'
import ListUsuarioComponent from './components/pages/listaUsuario/listaUsuario';
import ViewUsuarioComponent from './components/pages/view/viewUsuario';
import DadosSalvar from './components/pages/pageSalvar/dadosSalvos';

function App() {
  return (
    <div>
      <Router>
        <NavbarMenu />
        <Switch>
          <Route path="/" exact component={HomeComponent}></Route>
          <Route path="/home" component={HomeComponent}></Route>
          <Route path="/contato" component={ContatoComponent}></Route>
          <Route path="/add-usuario/:id" component={CreateUsuarioComponent}></Route>
          <Route path="/add-usuario/_app" component={CreateUsuarioComponent}></Route>
          <Route path="/promocoes" component={PromocoesComponent}></Route>
          <Route path="/lista" component={ListUsuarioComponent}></Route>
          <Route path="/view-usuario/:id" component={ViewUsuarioComponent}></Route>
          <Route path="/salvo" component={DadosSalvar}></Route>
        </Switch>
        <Footer/>
      </Router>

    </div>
  )
}

export default App;
