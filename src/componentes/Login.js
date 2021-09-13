import styled from 'styled-components';
import logo from '.././assets/logo.png';
import { Link, useHistory} from "react-router-dom";
import { useState, useContext } from 'react';
import axios from "axios"
import UserContext from '.././contexts/UserContext';

export default function Login(){

    const {user, setUser} = useContext(UserContext);

    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")
    const[loading, setLoading] = useState(false)

    const history = useHistory();

    function Entrar(event) {

		event.preventDefault(); // impede o redirecionamento

        setLoading(true)
        
        const body = {email: email, password: senha}

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)
        .then(res => {
            console.log(res.data)
            setUser(res.data)
            history.push('/hoje')
            setLoading(false)
        })

        .catch(err => {
            setLoading(false)
            console.log(err)        
            alert("tente novamente")
        })
    }

    return (
        <Container loading={loading}>
            <Logo src={logo}/>

            <form onSubmit={Entrar}>
                <input type="email" email="input" placeholder="email"
                value={email} required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" senha="input" placeholder="senha" 
                value={senha} onChange={(e) => setSenha(e.target.value)}/>
                <button onClick={Entrar}> Entrar </button>
            </form>

            
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
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
        margin: 0 auto 6px auto;
        font-family: Lexend Deca;
        border-color: #52B6FF;
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