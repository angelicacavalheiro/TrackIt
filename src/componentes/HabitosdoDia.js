import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';

export default function HabitosdoDia({habito, calcularPorcentagem, setHabitos}){

    const {user} = useContext(UserContext);
    let done = habito.done ? "#8FC549" : "#EBEBEB";
    const [concluido, setConcluido] = useState(done);

    function Check(){
        setConcluido("#8FC549");
        let id = (habito.id)

        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
        .then(res => {

            const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            }
    
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(res => {
                setHabitos(res.data)
                calcularPorcentagem(res.data)
            })       

        })    
    }
   
    function Uncheck(){

        setConcluido("#EBEBEB");
        let id = (habito.id)    
       
        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
        .then(res => {
                const config = {
                headers:{
                    Authorization: `Bearer ${user.token}`
                }
            }
    
            axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(res => {
                setHabitos(res.data)
                calcularPorcentagem(res.data)
            })            
        })      
    }  

    return(
        <MostrarHabitos value={concluido}>
            <div>  
                <div>
                    <h1>{habito.name}</h1>
                    <h2>Sequência atual: {habito.currentSequence} dias </h2>
                    <h2>Seu recorde: {habito.highestSequence} dias</h2>
                </div>   
                {(habito.done === true) ?
                    <ion-icon name="checkmark-outline" onClick={() => Uncheck()}></ion-icon>                   
                    : 
                    <ion-icon name="checkmark-outline" onClick={() => Check()}></ion-icon> 
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
        background-color:  ${(props) => props.value};
        border-radius: 5px; 
        padding: 0px;
        color: #FFFFFF;
     }
 `;

