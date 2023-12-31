import React from 'react'
import styled from "styled-components";
import {categories} from "../data"
import CategoryItem from './CategoryItem.jsx';
import {mobile} from "../responsive"


const Container = styled.div`
display:flex;
padding: 20px;
${mobile({padding :"0", flexDirection:"column"})}
`



const Categories = () => {
  return (
 <Container>
{categories.map((item) => (
    <CategoryItem item={item} key={item.id}/>
))}
 </Container>
 )
}

export default Categories