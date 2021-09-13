import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';
import Dias from './Dias';

export default function CriarHabito({setAdicionarHabito, setListaHabito}){
    
    const {user, setUser} = useContext(UserContext);
    const[name, setName] = useState("");
    const[days, setDays] = useState([]);
    const[loading, setLoading] = useState(false)  


    function Salvar(){

        setLoading(true)
        setAdicionarHabito(true)

        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }
    
        const body = {name, days}
        if (name!=="" && days !==[]) {
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
        .then(res => {
            console.log(res.data)
            setAdicionarHabito(false)
            setLoading(false)

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
        .catch(err => {   
            setLoading(false)
            console.log(err)                
            alert("tente novamente")
        }) 
        } else if (name ==="" || days ===[]){
            alert("preencha todos os campos")
            setLoading(false)
        }
    }   

    function Cancelar(){       
        setAdicionarHabito(false)      
    }   
    

    console.log(days)


    return (
        <Criar loading={loading}>
                <input type="text" name="input" placeholder="nome do hábito" 
                value={name} onChange={(e) => setName(e.target.value)}/>
                <Dias loading={loading} days={days} setDays={setDays} />    
                <SalvarHabito loading={loading}>
                    <p onClick={Cancelar}> Cancelar </p>
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
    opacity: ${props => props.loading ? 0.7 : 1}; 
    

    input{
        width: 303px;
        height: 45px;
        margin: 18px 18px 8px 19px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        font-family: Lexend Deca;
        opacity: ${props => props.loading ? 0.7 : 1};    
        background: ${props => props.loading ? "#F2F2F2" : "#FFFFFF"};  
        pointer-events: ${props => props.loading ? "none" : "visiblePainted"};      
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
        opacity: ${props => props.loading ? 0.7 : 1};
        pointer-events: ${props => props.loading ? "none" : "visiblePainted"};
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
        color: #FFFFFF;
        opacity: ${props => props.loading ? 0.7 : 1};
        pointer-events: ${props => props.loading ? "none" : "visiblePainted"};

    }   
    
`;
