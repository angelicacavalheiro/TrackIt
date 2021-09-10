import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';

export default function HabitosdoDia({habito}){

    const {user, setUser} = useContext(UserContext);

    function Check(id){
        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }

        console.log(config)

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
        .then(res => {
            console.log(res.data)
        })    
    }
   
    function Uncheck(id){
       
        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
        .then(res => {
            console.log(res.data)
        })       

    }  


    return(
        <MostrarHabitos>
            <div>  
                <div>
                    <h1>{habito.name}</h1>
                    <h2>Sequência atual: {habito.currentSequence} dias </h2>
                    <h2>Seu recorde: {habito.highestSequence} dias</h2>
                </div>   
                { (habito.done === true) ?
                    <ion-icon name="checkmark-outline" concluido={true}></ion-icon> 
                    : 
                    <ion-icon name="checkmark-outline" concluido={false}></ion-icon>
                    }
            
            </div>
        </MostrarHabitos> 
    )
}

const MostrarHabitos = styled.div`   
     display:flex;
     flex-direction: column;
     width: 340px;
     height: 91px;
     background: #FFFFFF;
     border-radius: 5px;
     margin: 0 auto 10px auto;   
     color: #DBDBDB;
     border: 1px solid #D5D5D5; 
     padding: 10px;
     font-family: Lexend Deca;
     
     h1{
         font-size: 19.976px;
         line-height: 25px;
         color: #666666;
     }

     h2{
        width: 146px;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        //muda de cor caso a pessoa tenha completado
        //color: #8FC549;
     }
     
     div{
         display: flex;
         justify-content: space-between;

         div{
            display: flex;
            flex-direction: column;

         }
     }

     ion-icon{
        width: 69px;
        height: 69px;
        background: ${props => props.concluido ? "#8FC549" : "#EBEBEB"}; 
        border-radius: 5px; 
        padding: 0px;
        color: #FFFFFF;
     }
 `;