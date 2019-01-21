import React, {Component} from 'react';
import NavWrapper from '../NavWrapper/NavWrapper';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const SubNav = styled.div`
    display:flex;
    justify-content: space-around;
    width:40%;
`;

const SubNavContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100;
    background:#f6f6f6;
    height:100px;
`;

const MacNav = props =>{
    return(
        <SubNavContainer>
            <SubNav>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>MacBook</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>MacBook Air</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>MacBook Pro</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>iMac</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>iMac Pro</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>Mac Pro</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>Mac mini</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>Accessories</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>Mojave</NavLink>
                <NavLink style={{color:'black', textDecoration:"none"}} to={"/mac/macbook"}>Compare</NavLink>
            </SubNav>
        </SubNavContainer>
    )
}
class Mac extends Component{
    render(){
        return(
            <div>
                <NavWrapper/>
                <MacNav />
            </div>
        )
    }
}

export default Mac;