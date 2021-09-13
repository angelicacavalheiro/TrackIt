import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function MostrarDias({habito}){
    console.log(habito)
    const [corDom, setCorDom] = useState(false)
    const [corSeg, setCorSeg] = useState(false)
    const [corTer, setCorTer] = useState(false)
    const [corQua, setCorQua] = useState(false)
    const [corQui, setCorQui] = useState(false)
    const [corSex, setCorSex] = useState(false)
    const [corSab, setCorSab] = useState(false)   

   useEffect( () => {
    {habito.map((dia) => (
        (dia === 0) ?
        setCorDom(true) 
        :
        (dia === 1) ?  
        setCorSeg(true) 
        :
        (dia === 2) ?  
        setCorTer(true)
        :
        (dia === 3) ?  
        setCorQua(true)
        :
        (dia === 4) ?  
        setCorQui(true)
        :
        (dia === 5) ?  
        setCorSex(true)
        :
        (dia === 6) ?  
        setCorSab(true)
        :    
        null     
    ))}
   }  
   , [])

    return(      
        
        <Dias>
            <Domingo colorir={corDom}> D </Domingo>
            <Segunda colorir={corSeg}> S </Segunda>
            <Terca colorir={corTer}> T </Terca>
            <Quarta colorir={corQua}> Q </Quarta>
            <Quinta colorir={corQui}> Q </Quinta>
            <Sexta colorir={corSex}> S </Sexta>
            <Sabado colorir={corSab}> S </Sabado>
        </Dias>
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
        color: "#DBDBDB";
        background: "#FFFFFF";
    }
    
`;

const Domingo = styled.button`
    color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"};
`;

const Segunda = styled.button`
    color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"};
`;

const Terca = styled.button`
    color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"};
`;

const Quarta = styled.button`
    color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"};
`;

const Quinta = styled.button`
    color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"};
`;

const Sexta = styled.button`
    color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"};
`;

const Sabado = styled.button`
    color: ${props => props.colorir ? "#FFFFFF" : "#DBDBDB"};
    background: ${props => props.colorir ? "#CFCFCF" : "#FFFFFF"};
`;
