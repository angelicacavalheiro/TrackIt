import styled from 'styled-components';
import Topo from "./Topo"
import Menu from "./Menu"

export default function Hoje(){
    return (
        <>
         <Topo/>
         <Container>
             <Titulo>
                 <p>Historico</p>
             </Titulo>   
  
             <Descricao>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
             </Descricao>
   
         </Container>
         <Menu/>
        </>
     )
 }
 
 const Container = styled.div`
     background: #F2F2F2;
     width: 100vw;
     height: 100vh;
     padding-top: 80px;   
     padding-bottom: 80px;   
 `;
 
 const Titulo = styled.div`
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
    
 `; 
 
 const Descricao = styled.div`
    width: 338px;
    height: 74px;
    font-family: Lexend Deca;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin: 0 auto;
  
`;



 