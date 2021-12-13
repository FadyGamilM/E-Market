import React from 'react'
import { TableContainer } from '@mui/material';
import axios from 'axios';

import styled from "styled-components";
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


const UserInfo =styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    img{
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    margin-right: 3rem;
   /* border-radius: 30%;
    border: 3px solid black;*/
    background-color:#F9FAFB;
    padding: 1rem 0.5rem;
   box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    /*box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;*/
    }

&.total {
    font-weight: 700;
  }
`;

const Infocontainer=styled.div`
   margin-top:auto;
   margin-bottom:auto;
   font-size:1.0.125rem;
   font-weight:bold;
   @media (max-width: 576px) {
   display: none;
   }
`
const Title=styled.p`
    padding-top:0.5rem;
  padding-bottom:0.5rem;
`

const FollowConatiner =styled.div`
   position:relative; 
    z-index: 0;
    margin-left: 27rem;
    margin-top: 2rem;
   @media only screen and (max-width: 768px) {
   margin-left: 2rem;
}

   svg{
       z-index: 1;
       font-weight:bold;
       	stroke: #fff;
       position:absolute;
       /*top:3.5rem;
       bottom:0;
       right:0;
       left:3.5rem;*/
     top: 0.5rem;
    left: 1rem;
    color:#fff;
   }

`
const Followbtn=styled.button`
 align-items: center;
  appearance: button;
  border-radius: 0.5rem;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 100%;
  line-height: 1.15;
  text-align: center;
  transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
   height:2rem;
   width:7rem;
   color:#fff;
   background-color:#0276FF;

   padding-left: 1rem;

:active {
  background-color: #006AE8;
}
:hover {
  background-color: #1C84FF;
}
`
const MyProductsContainer=styled.div`
display:flex;
flex-direction: column;
margin-top:8rem;

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
`
const PurchasedContainer =styled.div`
  
  margin-top:3rem;
   overflow-x: auto;
   margin-bottom:5rem;
`
const Report=styled.button`

  display:block;
  color:#fff;
  background-color: #60A5FA;
  padding: 1rem 1rem;
    font-size: 1rem;
  font-weight: 500;
  border-radius: 1rem;
  outline: none;
  border: 1px solid white;
   letter-spacing: 0.2em;
  cursor: pointer;
    margin: 1rem auto;
    transition: all 300ms ease-in-out;

      &:hover{
    background-color: white;
    border:1px solid #60A5FA;
    color:black;
  }
`;

const Tablecontainer =styled.div`
  max-width: 63rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
`;


const AddMoneyContainer =styled.div`
 box-sizing: border-box;
  font-size: 15px;
       max-width: 38em;
  padding: 2em 8em 2em 3em;
  margin: 2em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  :before , :after{
    box-sizing: border-box;
  }
`;


const SingleProduct = ({product}) => {
   return (
                                 <Item>
                                    <ImgContainer>
                                        <img src="/assets/images/product5.jpg" alt={product.name} />

                                    </ImgContainer>

                                    <Bottom>
                                        <Productname>{product.name}</Productname>
                                        <Owner>{product.owner.username}</Owner>
                                        <PriceContainer>
                                            <Price>${product.price}</Price>
                                        </PriceContainer>
                                    </Bottom>
                                </Item>
   )
}

export default SingleProduct
