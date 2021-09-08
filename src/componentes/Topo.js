import styled from 'styled-components';
import Logo from '.././assets/miniLogo.png';
import Bob from '.././assets/bob.png';

export default function Topo(){
    return (
        <Container>
            <LogoTopo src={Logo}/>
            <BobTopo src={Bob}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15); 
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;

`;

const LogoTopo = styled.img`    
    margin-left: 18px;
`;

const BobTopo = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
`;




