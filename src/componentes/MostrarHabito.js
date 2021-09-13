import styled from 'styled-components';
import { useContext, useState } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';
import Habitos from "./Habitos"
import MostrarDias from './MostrarDias';


export default function MostrarHabito({habito, setListaHabito}){

    const {user, setUser} = useContext(UserContext);

    function deletar({habito}){

        let resultado = window.confirm("Tem certeza que deseja deletar?");

        if (resultado === true){

            let id = (habito.id)
            const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            }   
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)  
            .then(res => { 

                const config = {
                    headers:{
                        Authorization: `Bearer ${user.token}`
                    }
                }         
                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                .then(res => {
                    console.log(res.data)
                    setListaHabito(res.data)
                               
                })                   
            }) 
        }      
    }   
   
    return (   
        <Mostrar>
                <div>
                    <p>{habito.name}</p>
                    <ion-icon onClick={() => deletar({habito})} name="trash-outline"></ion-icon>
                </div>
                <MostrarDias habito = {habito.days} />
            </Mostrar>        
    )
}


const Mostrar = styled.div`   
    display:flex;
    flex-direction: column;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto;   
    color: #DBDBDB;
    border: 1px solid #D5D5D5; 
    padding-bottom: 15px;
    margin-bottom: 10px;
    
    p{
        font-family: Lexend Deca;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin: 13px 0 8px 15px;
    }
    
    div{
        display: flex;
        justify-content: space-between;
    }

    ion-icon{
        color: #666666;
        margin-top: 11px;
        margin-right: 10px;
    }
`;



