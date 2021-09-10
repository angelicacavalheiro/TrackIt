import styled from 'styled-components';
import { useContext } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';

export default function MostrarHabito(){

    const {user, setUser} = useContext(UserContext);

    const id = 3067;

    const config = {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    }     

    axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)  
    .then(res => {  
        // console.log(res);  
        // console.log(res.data);  
    }) 
    

   
    return (      
        <Mostrar>
            <div>
                <p>Valor pego do Input</p>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
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



