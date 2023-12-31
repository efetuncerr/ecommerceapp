import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

    
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({width :"75%"})}

`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;

`;



const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;


`;

const Agreement = styled.span`
font-size: 13px;
margin: 20px 0px;

`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;

`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
