import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '.././contexts/UserContext';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


export default function Menu(){

    const {porcentagem} = useContext(UserContext);

    return (
        <Container>
            <Link to={`/habitos`} style={{textDecoration: 'none'}}>
                <p>Habitos</p>
            </Link>
            <Evolucao>
                <Link to={`/hoje`} style={{textDecoration: 'none'}}>
                    <CircularProgressbar
                        value={porcentagem}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52b6ff",                  
                        textSize: 18,
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                        />
                </Link>
            </Evolucao>
            <Link to={`/historico`} style={{textDecoration: 'none'}}>
                <p>Historico</p> 
            </Link>                  
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    position: fixed;
    bottom: 0px;
    align-items: center;
    justify-content: space-around;

    p{
        width: 79px;
        height: 22px;
        font-family: Lexend Deca;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`;

const Evolucao = styled.span `
    width: 91px;
    height: 91px;
    margin-bottom: 30px;
    font-family: Lexend Deca;     
`;