import styled from 'styled-components';
import Topo from "./Topo"
import Menu from "./Menu"

export default function Habitos(){
    return (
       <>
        <Topo/>
        <Container>
            <AbrirHabito>
                <p>Meus hábitos</p>
                <button> + </button>
            </AbrirHabito>   

            <CriarHabito>
                <input type="text" email="input" placeholder="nome do hábito" />
                <Dias>
                    <button> D </button>
                    <button> S </button>
                    <button> T </button>
                    <button> Q </button>
                    <button> Q </button>
                    <button> S </button>
                    <button> S </button>
                </Dias>
                <SalvarHabito>
                    <p> Cancelar </p>
                    <button> Salvar </button>
                </SalvarHabito>
                        
            </CriarHabito>   

            <MostrarHabito>
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
                            
            </MostrarHabito>        

            <NenhumHabito>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </NenhumHabito>  
         
  
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

const AbrirHabito = styled.div`
    width: 340px;
    height: 85px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    font-family: Lexend Deca;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
   
    
    button{   
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

const CriarHabito = styled.div`
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
    

    input{
        width: 303px;
        height: 45px;
        margin: 18px 18px 8px 19px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
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
        color: #FFFFFF

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

const NenhumHabito = styled.div`
    width: 338px;
    height: 74px;
    font-family: Lexend Deca;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin: 0 auto;
  
`;


