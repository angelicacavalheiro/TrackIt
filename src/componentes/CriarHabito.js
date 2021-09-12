import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';

const enabled = true;

export default function CriarHabito(){

    
    const {user, setUser} = useContext(UserContext);
    const[name, setName] = useState("");
    const[days, setDays] = useState([]);

   

    function Salvar(){
        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
    
        const body = {name, days}
    
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        .then(res => {
            console.log(res.data)
        })    
    }   
    
    function incrementaDia(dia){
        
        setDays([...days, dia]) //logica pra incrementar ok!

        days.forEach((day) => {
            if (day===dia){ //logica pra decrementar ok!

                console.log("vou remover");
                let arrayDias = [...days]; 
                let index = arrayDias.indexOf(day)  

                if (index !== -1) {
                    arrayDias.splice(index, 1);                   
    
                    setDays([...arrayDias])
                  }

            } else
            {
                console.log("nao vou fazer nada") 
            }
            })
    }
    console.log(days)


    return (
        <Criar habilitado={enabled}>
                <input type="text" name="input" placeholder="nome do hábito" 
                value={name} onChange={(e) => setName(e.target.value)}/>
                <Dias>
                    <button onClick= {() => incrementaDia(7)}> D </button>
                    <button onClick= {() => incrementaDia(1)}> S </button>
                    <button onClick= {() => incrementaDia(2)}> T </button>
                    <button onClick= {() => incrementaDia(3)}> Q </button>
                    <button onClick= {() => incrementaDia(4)}> Q </button>
                    <button onClick= {() => incrementaDia(5)}> S </button>
                    <button onClick= {() => incrementaDia(6)}> S </button>
                </Dias>
                <SalvarHabito>
                    <p> Cancelar </p>
                    <button onClick={Salvar}> Salvar </button>
                </SalvarHabito>                        
            </Criar>                  
    )
}

const Criar = styled.div`
    display:flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto;   
    color: #DBDBDB;
    border: 1px solid #D5D5D5; 
    margin-bottom: 10px;  
    opacity: ${props => props.habilitado ? 1 : 0.7}; 
    

    input{
        width: 303px;
        height: 45px;
        margin: 18px 18px 8px 19px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        background: ${props => props.habilitado ? "#FFFFFF" : "#F2F2F2"};       
        }
`;

const Dias = styled.div`
    width: 234px;
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    margin-left: 19px;
    color: #DBDBDB;
    
    
    
    button{
        width: 30px;
        height: 30px;
        font-family: Lexend Deca;
        font-size: 19.976px;
        line-height: 25px;       
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        background: #FFFFFF;
        color: #DBDBDB;
        //se o dia for selecionado, muda
        //background: #CFCFCF;        
        //color: #FFFFFF;      

    }
    
`;

const SalvarHabito = styled.div`
    display: flex;
    width: 176px;
    justify-content: space-between;
    margin: 36px 16px 23px 148px;


    p{
        width: 84px;
        height: 35px;        
        font-family: Lexend Deca;       
        font-size: 15.976px;
        line-height: 20px;       
        display: flex;
        justify-content: center;
        align-items: center;
        color: #52B6FF;
    }

    button{
        width: 84px;
        height: 35px;   
        background: #52B6FF;
        border-color: #52B6FF;
        border-radius: 4.63636px; 
        font-family: Lexend Deca;   
        font-size: 15.976px;
        line-height: 20px; 
        text-align: center;
        color: #FFFFFF

    }   
    
`;
