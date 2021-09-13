import styled from 'styled-components';
import { useState } from 'react';

export default function Dias({loading, days, setDays}){

    const[colorir, setColorir] = useState(false) 

    function incrementaDia(dia){
      
        setDays([...days, dia]) //logica pra incrementar ok!

        days.forEach((day) => {
            if (day===dia){ //logica pra decrementar ok!
                setColorir(true)  

                console.log("vou remover");
                let arrayDias = [...days]; 
                let index = arrayDias.indexOf(day)  
                if (index !== -1) {
                    arrayDias.splice(index, 1);                   
    
                    setDays([...arrayDias])
                  }
            } 
            })
    }

    return(
        <TodoOsDias loading={loading} colorir={colorir} >
            <button onClick= {() => incrementaDia(0)}> D </button>
            <button onClick= {() => incrementaDia(1)}> S </button>
            <button onClick= {() => incrementaDia(2)}> T </button>
            <button onClick= {() => incrementaDia(3)}> Q </button>
            <button onClick= {() => incrementaDia(4)}> Q </button>
            <button onClick= {() => incrementaDia(5)}> S </button>
            <button onClick= {() => incrementaDia(6)}> S </button>
        </TodoOsDias>

    )
}

    const TodoOsDias = styled.div`
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
        opacity: ${props => props.loading ? 0.7 : 1};
        pointer-events: ${props => props.loading ? "none" : "visiblePainted"};
        color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
        background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"}; 

    }
    
`;

