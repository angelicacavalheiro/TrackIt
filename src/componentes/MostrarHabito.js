import styled from 'styled-components';
import { useContext } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';
import Habitos from "./Habitos"

export default function MostrarHabito({habito, listaHabito, setListaHabito}){

    const {user, setUser} = useContext(UserContext);

    function deletar({habito}){

        let id = (habito.id)

        const config = {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
        }     

        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)  
        .then(res => {  
            console.log(listaHabito)

            //setListaHabito([...listaHabito])    
        })    

    
    }

    

   
    return (   
        <Mostrar>
                <div>
                    <p>{habito.name}</p>
                    <ion-icon onClick={() => deletar({habito})} name="trash-outline"></ion-icon>
                </div>

                { (habito.day === 1) ?
                        
                    true : null }
                <Dias>
                    <button> D </button>
                    <button> S </button>
                    <button> T </button>
                    <button> Q </button>
                    <button> Q </button>
                    <button> S </button>
                    <button> S </button>
                </Dias>
            </Mostrar>        
           
    )
}



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



