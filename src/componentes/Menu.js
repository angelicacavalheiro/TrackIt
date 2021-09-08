import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <Container>
            <Link to={`/habitos`} style={{textDecoration: 'none'}}>
                <p>Habitos</p>
            </Link>
            <Link to={`/hoje`} style={{textDecoration: 'none'}}>
                <p>Hoje</p>
            </Link>
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
