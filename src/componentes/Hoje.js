import styled from 'styled-components';
import Topo from "./Topo"
import Menu from "./Menu"
import { useEffect, useState, useContext } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';

export default function Hoje(){

    const {user, setUser} = useContext(UserContext);
    const [habitos, setHabitos] = useState()

    //para listar os habitos de hoje

    useEffect(() => {

        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }

        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        .then(res => {
            console.log(res.data)
            setHabitos(res.data)
            console.log(habitos)
        })        

    }, []);


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

    const completo = false;

    return (
        <>
         <Topo/>
         <Container completado={completo}>
             <ConclusaoDeHabito>
                 <p>Segunda, 17/07</p>
                 <h1> Nenhum habito concluido ainda </h1>
             </ConclusaoDeHabito>   
  
             { (habitos !== undefined) ? 
                        habitos.map((habito) => (
                            <MostrarHabito>
                                <div>  
                                    <div>
                                        <h1>{habito.name}</h1>
                                        <h2>Sequência atual: {habito.currentSequence} dias </h2>
                                        <h2>Seu recorde: {habito.highestSequence} dias</h2>
                                    </div>   
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                </div>
                            </MostrarHabito>                            
                    )) 
                    :
                    null                    
                    }                         
            

         </Container>
         <Menu/>
        </>
     )
 }
 
 const Container = styled.div`
     background: #F2F2F2;
     width: 100vw;
     height: 100%;
     padding-top: 80px;   
     padding-bottom: 80px;   
 `;
 
 const ConclusaoDeHabito = styled.div`
     width: 340px;
     height: 85px;
     display:flex;
     flex-direction: column;
     justify-content: center;
     margin: 0 auto;
     font-family: Lexend Deca;

     p{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
     }
     
     h1{
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
     }
    
     
     button{
         font-family: Lexend Deca;      
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
 
 const MostrarHabito = styled.div`   
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
        background: ${props => props.completado ? "#EBEBEB" : "#8FC549"}; 
        border-radius: 5px; 
        padding: 0px;
        color: #FFFFFF;
     }
 `;



 