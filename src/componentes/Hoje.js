import styled from 'styled-components';
import Topo from "./Topo"
import Menu from "./Menu"
import { useEffect, useState, useContext } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';
import HabitosdoDia from './HabitosdoDia';
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'

export default function Hoje(){

    const completo = true;

    const {user, porcentagem, setPorcentagem} = useContext(UserContext);
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
            //console.log(res.data)
            setHabitos(res.data)
            calcularPorcentagem(res.data)
            //console.log(habitos)
        })        

    }, []);

    function calcularPorcentagem(arraydeHabitos){

        const arrayDone = arraydeHabitos.filter( (Habitodone) => Habitodone.done )

        setPorcentagem( (arrayDone.length / arraydeHabitos.length ) * 100 )


    }


    return (
        <>
         <Topo/>
         <Container completado={completo}>
             <ConclusaoDeHabito>
                 <p> {dayjs().locale('pt-br').format('dddd')} {dayjs().locale('pt-br').format('DD/MM')} </p>
                 <h1> {porcentagem} </h1>
             </ConclusaoDeHabito>   
  
             { (habitos !== undefined) ? 
                    habitos.map((habito) => (
                        <HabitosdoDia habito={habito}
                        calcularPorcentagem={calcularPorcentagem}
                        setHabitos={setHabitos}/>                          
                )) 
                :
                null                    
             }                         
            
         </Container>
         <Menu porcentagem={porcentagem}/>
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
 


 