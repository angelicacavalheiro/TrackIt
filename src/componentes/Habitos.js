import styled from 'styled-components';
import Topo from "./Topo"
import Menu from "./Menu"
import CriarHabito from './CriarHabito';
import MostrarHabito from './MostrarHabito';
import { useEffect, useContext, useState } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';


export default function Habitos(){   

    const {user, setUser} = useContext(UserContext);
    const [adicionarHabito, setAdicionarHabito] = useState(false);

    function adicionaHabito(){
        setAdicionarHabito(true)  
    }

    useEffect(() => {

        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        } 

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        .then(res => {
            console.log(res.data)
        })        

    }, []);


    return (
       <>
        <Topo/>
        <Container>
            <AbrirHabito>
                <p>Meus hábitos</p>
                <button onClick={adicionaHabito} > + </button>                
            </AbrirHabito>   
            {(adicionarHabito === true) ? <CriarHabito /> : null }
            
            <MostrarHabito />                  

            <NenhumHabito>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </NenhumHabito>           
  
        </Container>
        <Menu/>
       </>
    )
}

const Container = styled.div`
    background: #F2F2F2;
    width: 100vw;
    height: 100vh;
    padding-top: 80px;   
    padding-bottom: 80px;   
`;

const AbrirHabito = styled.div`
    width: 340px;
    height: 85px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    font-family: Lexend Deca;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
   
    
    button{   
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-color:  #52B6FF;
        border-radius: 4.63636px;
        
    }
`;

const NenhumHabito = styled.div`
    width: 338px;
    height: 74px;
    font-family: Lexend Deca;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin: 0 auto;
  
`;


