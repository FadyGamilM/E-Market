import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {ProductData} from '../data';

const Section = styled.section`
    padding: 0 0 0.1rem 0;
    overflow: hidden;
`;

const Titleinfo = styled.div`
    text-align: center;
    margin-bottom: 5rem;
`;

const Title=styled.h1`
    font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;
const Subtitle =styled.p`
    color:#828282;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 3rem;
    padding: 0 4.5rem;
    margin-bottom: 5rem;
`;

const ImgContainer = styled.div`
    position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
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
  i {
    
    transition: all 300ms ease-in-out;
  }
    :hover ${IconContainer} {
    border-radius: 1rem 0 0 0;
  }

`;
const Bottom = styled.div`
  padding: 1rem;
  text-align: left;
`
const ProductLink = styled(Link)`
  margin-bottom: 1rem;
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
`

const products = () => {
    return (
        <div>
            <Section>
                <Titleinfo>
                    <Title>Products</Title>
                    <Subtitle>Select from the premium product and save plenty money</Subtitle>
                </Titleinfo>
                <Container>
                    {ProductData.map((item, index) => (
                        <Item key={index}>
                            <ImgContainer>
                                    <Link to={`/products/${item._id}`}><img src={item.image} alt={item.name} /></Link>
                            <IconContainer>
                                    <i className='fas fa-shopping-cart'></i>
                            </IconContainer>
                        </ImgContainer>
                <Bottom>
                    <ProductLink to={`/products/${item._id}`}>{item.name}</ProductLink>
                    
                      <Owner>{item.owner}</Owner>
                    
                    <PriceContainer>
                        <Price>${item.price}</Price>
                    </PriceContainer>
                </Bottom>
                    </Item>
                    ))}
                </Container>


            </Section>
        </div>
    )
}

export default products
