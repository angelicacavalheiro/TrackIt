import styled from 'styled-components';
import { useState } from 'react';

export default function Dias({loading, days, setDays}){

    function incrementaDia(dia){
      
        setDays([...days, dia]) //logica pra incrementar ok!
       

        days.forEach((day) => {
            if (day===dia){ //logica pra decrementar ok!  

                let arrayDias = [...days]; 
                let index = arrayDias.indexOf(day)  
                if (index !== -1) {
                    arrayDias.splice(index, 1);                   
    
                    setDays([...arrayDias])
                  }
            } 
            })
    }

    function colorirDia(dia){
        const diaClicado = days.includes(dia);

        console.log(diaClicado)

        return(diaClicado)
      
    }




    return(
        <TodoOsDias loading={loading} >
            <StyledButton onClick= {() => incrementaDia(0)} colorir={colorirDia(0)}> D </StyledButton>
            <StyledButton onClick= {() => incrementaDia(1)} colorir={colorirDia(1)}> S </StyledButton>
            <StyledButton onClick= {() => incrementaDia(2)} colorir={colorirDia(2)}> T </StyledButton>
            <StyledButton onClick= {() => incrementaDia(3)} colorir={colorirDia(3)}> Q </StyledButton>
            <StyledButton onClick= {() => incrementaDia(4)} colorir={colorirDia(4)}> Q </StyledButton>
            <StyledButton onClick= {() => incrementaDia(5)} colorir={colorirDia(5)}> S </StyledButton>
            <StyledButton onClick= {() => incrementaDia(6)} colorir={colorirDia(6)}> S </StyledButton>
        </TodoOsDias>
    )
}

    const StyledButton = styled.button`
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
    `;


    const TodoOsDias = styled.div`
    width: 234px;
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;
    margin-left: 19px;
    color: #DBDBDB;   
    
`;


