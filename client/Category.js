import React from 'react';
import styled from "styled-components";
import {forMenCat} from '../data';
import { Search} from "@material-ui/icons";

const Section = styled.section`
    padding: 0 0 0.1rem 0;
    overflow: hidden;
`;

const Container =styled.div`
    max-width: 80rem;
    margin: 1.5rem auto;
    

@media only screen and (max-width: 1200px) {
    padding: 0 3rem;
}

@media only screen and (max-width: 768px) {
    max-width: 60rem;
}
`;

const MyProductsContainer=styled.div`
display:flex;
flex-direction: column;
margin-top:5rem;

`
const Titleinfo = styled.div`
    text-align: left;
    margin-bottom: 3rem;
`;

const ProductTitle =styled.h1`
    font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`
const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    gap: 3rem;
    padding: 0 4.5rem;
    margin-bottom: 5rem;
    justify-items: center;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0.6rem;
  background-color: #fff;
  border-radius: 50%;
  padding: 1.3rem 1.6rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;

  :hover {
    background-color: #60A5FA;
    color: #fff;
  }

  &.disabled {
    pointer-event: none;
    cursor: default;
  }
`;
const Item =styled.div`
      overflow: hidden;
     max-width:15rem;
  i {
    
    transition: all 300ms ease-in-out;
  }
    :hover ${IconContainer} {
    border-radius: 1rem 0 0 0;
  }

`;
const ImgContainer = styled.div`
    position: relative;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Bottom = styled.div`
  padding: 1rem;
  text-align: left;
`
const Productname = styled.h1`
  font-weight: inherit;
  font-size: 1.5rem;
  

  :hover {
    color: #60A5FA;
  }
`
const Price = styled.span`
  color: #60A5FA;
  font-size: 1.3rem;
  
`
const Owner = styled.p`
text-align:right;
   color:#828282;
`
const PriceContainer =styled.div`
text-align:right;
`;

const Input = styled.input`
    width:95%;
    border: none;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
      margin-left: 30%;
  padding: 5px;
      max-width: 30rem;
  margin-bottom:3rem;
      margin-right: 30%;

`;
const Category = () => {
    return (
        <Section>
            <Container>
    <MyProductsContainer>
                    <Titleinfo>
                        <ProductTitle>For Men Catrgory</ProductTitle>
                        <hr/>
                    </Titleinfo>

                     <SearchContainer>
                         <Input type="text" name="search_bar" placeholder="Search"/>
                         <Search style={{ color: "gray", fontSize: 16 }} />
                     </SearchContainer>

                    <ItemContainer>
                        {forMenCat.map((item, index) => (
                            <Item key={index}>
                                    <ImgContainer>
                                        <img src={item.image} alt={item.name} />
                                    </ImgContainer>
                                    <Bottom>
                                        <Productname>{item.name}</Productname>
                                        <Owner>{item.owner}</Owner>
                                        <PriceContainer>
                                            <Price>${item.price}</Price>
                                        </PriceContainer>
                                    </Bottom>
                                </Item>
                            ))}
                    </ItemContainer>
                </MyProductsContainer>
             </Container>
        </Section>
    )
}

export default Category
