import styled from 'styled-components';
import Topo from "./Topo"
import Menu from "./Menu"

export default function Hoje(){
    return (
        <>
         <Topo/>
         <Container>
             <ConclusaoDeHabito>
                 <p>Segunda, 17/07</p>
                 <h1> Nenhum habito concluido ainda </h1>
             </ConclusaoDeHabito>   
  
             <MostrarHabito>
                 <div>
                     <div>
                        <h1>Valor pego do Input</h1>
                        <h2>Sequência atual: 3 dias </h2>
                        <h2>Seu recorde: 5 dias</h2>
                     </div>
                     <Check> Icone check </Check>
        
                 </div>
                
             </MostrarHabito>                 
   
         </Container>
         <Menu/>
        </>
     )
 }
 
 const Container = styled.div`
     background: #E5E5E5;
     width: 100vw;
     height: 100vh;
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
     margin: 0 auto;   
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
 `;

const Check = styled.div`
    width: 69px;
    height: 69px;
    background: #8FC549;
    border-radius: 5px; 
    padding: 15px;
 `;
 

 