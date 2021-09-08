import styled from 'styled-components';

export default function Menu(){
    return (
        <Container>
            <p>Habitos</p>
            <p>Hoje</p>
            <p>Historico</p>        
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
