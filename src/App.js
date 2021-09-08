import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./componentes/Login";
import Cadastro from "./componentes/Cadastro";
import Habitos from "./componentes/Habitos";
import Hoje from "./componentes/Hoje";
import Historico from "./componentes/Historico";

function App() {


  return (
    <BrowserRouter>
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
          <Historico />
        </ Route> 

      </ Switch>       
    </ BrowserRouter>   
  );
}

export default App;
