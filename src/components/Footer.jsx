import React from "react";
import { styled } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive"


const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: teal;
  ${mobile({flexDirection :"column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;

`

const SocialIcon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`    


const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display :"none"})}
`;

const Title = styled.h3 `
margin-bottom: 30px;

`


const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;

`


const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EFE.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          error tenetur sed quia eum aut quos dignissimos fugiat dolor beatae,
          doloremque sit eaque eligendi voluptates nobis minus pariatur ipsum
          maxime.
        </Desc>
        <SocialContainer>
          <SocialIcon color ="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color ="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color ="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>

        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accesories</ListItem>
            <ListItem>My account</ListItem>
            <ListItem>Older Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>

        <Title>Contact</Title>
        <ContactItem>
             <FmdGoodIcon style={{marginRight:"10px"}}/> 622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
           <LocalPhoneIcon style={{marginRight:"10px"}}/> +1 123 434 232
        </ContactItem>
        <ContactItem>
           <EmailIcon style={{marginRight:"10px"}}/>  contact@efe.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
