import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    width:100%;
    background:#353535;
    height:40px;
`
const NavContainer = styled.div`
        display:flex;
        justify-content: space-around;
        align-items:center;
        width:40%;
`;
class NavWrapper extends Component{
    render(){
        return(
            <Container>
                <NavContainer>
                    <NavLink exact style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={"/"}>Apple</NavLink>
                    <NavLink style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={'/mac'}>Mac</NavLink>
                    <NavLink style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={'/ipad'}>iPad</NavLink>
                    <NavLink style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={'/iphone'}>iPhone</NavLink>
                    <NavLink style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={'/watch'}>Watch</NavLink>
                    <NavLink style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={'/tv'}>TV</NavLink>
                    <NavLink style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={'/music'}>Music</NavLink>
                    <NavLink style={{color:'white', textDecoration:"none"}} activeStyle={{color:'grey'}} to={'/support'}>Support</NavLink>
                </NavContainer>
            </Container>
        )
    }
}

export default NavWrapper;