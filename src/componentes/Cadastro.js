import styled from 'styled-components';
import logo from '.././assets/logo.png';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from "axios"

export default function Cadastro(){

    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")
    const[nome, setNome] = useState("")
    const[foto, setFoto] = useState("")

    const history = useHistory()

    function Cadastrar(event) {

		event.preventDefault(); // impede o redirecionamento
        
        const body = {email: email,
            name: nome,
            image: foto,
            password: senha}

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
        .then(res => {
            console.log(res.data)
            history.push('/')
        })

        .catch(err => {
            console.log(err)
            alert("tente novamente")
    })
    
}

    return (
        <Container >
            <Logo src={logo}/>
            <form onSubmit={Cadastrar}>
                <input type="email" email="input" required placeholder="email" 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" senha="input" placeholder="senha" 
                value={senha} onChange={(e) => setSenha(e.target.value)}/>
                <input type="text" nome="input" required placeholder="nome" 
                value={nome} onChange={(e) => setNome(e.target.value)}/>
                <input type="URL" foto="input" required placeholder="foto"
                value={foto} onChange={(e) => setFoto(e.target.value)} />
                <button onClick={Cadastrar}> Cadastrar </button>
                <Link to={`/`} style={{textDecoration: 'none'}}>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;	
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
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
        border-color: #52B6FF;
        margin: 0 auto 6px auto;
        font-family: Lexend Deca;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }

    form {
        text-align: center;
        display: flex;
        flex-direction: column;
    }
`;

const Logo = styled.img`
    width: 180px;
    height: 178.38px;
    margin: 68px auto 32px auto;
	
`;