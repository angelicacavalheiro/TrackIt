import styled from 'styled-components';
import Logo from '.././assets/miniLogo.png';
import { useContext } from 'react';
import UserContext from '.././contexts/UserContext';

export default function Topo(){
    
    const {user} = useContext(UserContext);

    return (
        <Container>
            <LogoTopo src={Logo}/>
            <BobTopo src={user.image}/>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
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




