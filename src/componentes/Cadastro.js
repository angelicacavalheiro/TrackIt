import styled from 'styled-components';
import logo from '.././assets/logo.png';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from "axios"
import Loader from "react-loader-spinner";

export default function Cadastro(){

    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")
    const[nome, setNome] = useState("")
    const[foto, setFoto] = useState("")
    const[loading, setLoading] = useState(false)

    const history = useHistory()

    function Cadastrar(event) {

        setLoading(true)

		event.preventDefault(); // impede o redirecionamento
        
        const body = {email: email,
            name: nome,
            image: foto,
            password: senha}

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
        .then(res => {
            setLoading(false)
            console.log(res.data)
            history.push('/')
        })

        .catch(err => {
            setLoading(false)
            console.log(err)
            alert("tente novamente")
    })
    
}

    return (
        <Container loading={loading} >
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

                {(loading === true) ? 
                <button> <Loader type="ThreeDots" color="#FFFFFF" height={45} width={80} /> </button>
                 : <button onClick={Cadastrar}> Cadastrar </button>}

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
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin: 0 auto 6px auto;
        font-size: 19.976px;
        line-height: 25px;
        color: black;
        opacity: ${props => props.loading ? 0.7 : 1};    
        background: ${props => props.loading ? "#F2F2F2" : "#FFFFFF"};  
        pointer-events: ${props => props.loading ? "none" : "visiblePainted"};
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
        opacity: ${props => props.loading ? 0.7 : 1};
        pointer-events: ${props => props.loading ? "none" : "visiblePainted"};
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