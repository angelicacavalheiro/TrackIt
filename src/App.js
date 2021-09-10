import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Cadastro from "./componentes/Cadastro";
import Habitos from "./componentes/Habitos";
import Hoje from "./componentes/Hoje";
import Historico from "./componentes/Historico"
import { useState } from 'react';
import UserContext from './contexts/UserContext';

function App() {

  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
        <Switch>

        <UserContext.Provider value={{user, setUser}}>

          <Route path="/" exact>
            <Login />
          </ Route> 

          <Route path="/cadastro" exact>
            <Cadastro />
          </ Route> 

          <Route path="/habitos" exact>
            <Habitos />
          </ Route>  

          <Route path="/hoje" exact>
            <Hoje />
          </ Route>

          <Route path="/historico" exact>
            <Historico />
          </ Route> 
        
          </UserContext.Provider>

      </ Switch>       
    </ BrowserRouter>   
  );
}

export default App;
