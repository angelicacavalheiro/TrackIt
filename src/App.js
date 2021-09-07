import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topo from "./componentes/Topo"
import Menu from "./componentes/Menu"
import Login from "./componentes/Login";
import Cadastro from "./componentes/Cadastro";
import Habitos from "./componentes/Habitos";
import Hoje from "./componentes/Hoje";
import Historico from "./componentes/Historico";
import { useState} from "react";

function App() {


  return (
    <BrowserRouter>
      <Topo />    
      <Menu />    

      <Switch>

        <Route path="/" exact>
          <Login />
        </ Route> 

         <Route path="/cadastro" exact>
          <Cadastro />
        </ Route> 

        <Route path="/habitos" exact>
          <Habitos/>
        </ Route>  

        <Route path="/hoje" exact>
          <Hoje/>
        </ Route>

        <Route path="/historico" exact>
          <Historico/>
        </ Route>  

      </ Switch>       
    </ BrowserRouter>   
  );
}

export default App;
