import { Search } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { styled } from "styled-components";
import Badge from "@mui/material/Badge";
import {mobile} from "../responsive"
import { NavLink } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({height :"50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding :"10px 0px"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: 3px;
  ${mobile({fontSize :"24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent :"center"})}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize :"12px", marginLeft:"10px"})}
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  ${mobile({display :"none"})}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width :"50px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{color:"gray", fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo> <NavLink style={{textDecoration:"none", color:"black"}} to="/"> EFE.</NavLink></Logo>
        </Center>
        <Right>
          <MenuItem><NavLink style={{textDecoration:"none", color:"black"}} to="/register"> REGISTER</NavLink></MenuItem>
          <MenuItem><NavLink style={{textDecoration:"none", color:"black"}} to="/login"> SIGN IN</NavLink></MenuItem>
          <NavLink to="/cart">    <MenuItem> <Badge badgeContent={4} color="primary">
     <ShoppingCartIcon color="action" />
    </Badge></MenuItem>  </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
