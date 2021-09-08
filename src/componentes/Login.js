import styled from 'styled-components';
import logo from '.././assets/logo.png';

export default function Login(){
    return (
        <Container>
            <Logo src={logo}/>
            <input type="text" email="input" placeholder="email" />
            <input type="text" senha="input" placeholder="senha" />
            <button> Entrar </button>
            <p>Não tem uma conta? Cadastre-se!</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;	
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    font-family: Lexend Deca;
	
	p {
        width: 232px;
        height: 17px;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        margin: 20px auto 0px auto;
        color: #52B6FF;

	}

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin: 0 auto 6px auto;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        margin: 0 auto 6px auto;
        font-family: Lexend Deca;
        border-color: #52B6FF;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }
`;

const Logo = styled.img`
    width: 180px;
    height: 178.38px;
    margin: 68px auto 32px auto;
	
`;