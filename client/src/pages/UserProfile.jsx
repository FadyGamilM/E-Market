import { TableContainer } from '@mui/material';
import axios from 'axios';
import './add.css';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import SingleProduct from './SingleProduct';
import {addNewProduct, RefreshLoggedInUserInfo, depositeCachToYourAccount, fetchPurchasedProducts} from "../apiCalls"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';




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

const Select = styled.select`
  font-family: 'Poppins', sans-serif;
  width: 4.5rem;
  padding: 0.3rem;
  border: 1px solid #3a3b3c;
  appearance: none;
  outline: none;
  font-weight: 600;
  cursor: pointer;
`;

const UserProfile = () => {
  console.log("[UserProfile component] : ... Welcome")
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("")
  const [additionalCach, setAdditionalCach] = useState(0);
  const [purchasedOfLoggedIn, setPurchasedOfLoggedIn] = useState([]);
  const quantity =["shoes", "electronics", "men", "women", "bags"];
  const navigate = useNavigate()
  const userLogin = useSelector(state=>state.userLogin);
  let {userInfo} = userLogin;
  console.log("ALl User Info are: ", userInfo);
  let offeredProducts = userInfo.offeredProducts;
  let soldProducts = userInfo.soldProducts;
  let purchasedProducts = userInfo.purchasedProducts;
  /* --------------------- fetch all products of this user -------------------- */
  window.onload = function() {
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }
  useEffect(()=>{
    if(!userInfo){
      window.location.href = ("/login")
    }else{
      RefreshLoggedInUserInfo(userInfo.id);
      console.log(userInfo)
    }
  },[ userInfo])
  /* -------------------------------------------------------------------------- */

  const DepositeCach = (e)=>{
    e.preventDefault();
    // send userID and additionalCach state
    depositeCachToYourAccount(userInfo.id, additionalCach );
    setAdditionalCach(0);
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
     offeredProducts = userInfo.offeredProducts;
    soldProducts = userInfo.soldProducts;
     purchasedProducts = userInfo.purchasedProducts;
     window.location.reload();
    window.location.href = "/profile";
  };

  const showPurchasedProducts = (e)=>{
    e.preventDefault();
    // get al products and click the button to show the table
    fetchPurchasedProducts(userInfo.id);
    setPurchasedOfLoggedIn(JSON.parse(localStorage.getItem("loggedInPurchasedProducts")));
    console.log(purchasedOfLoggedIn);
  }
  return (
        <Section>
            <Container>
                {/* {userInfo.map(user=>( */}
                <UserInfo>
                        {/* <img src={userInfo.image} alt={userInfo.username} /> */}
                        <Infocontainer>
                            <Title>Name: {userInfo.username}</Title>
                            <Title>Region: {userInfo.region}</Title>
                            <Title>E-Mail: {userInfo.email}</Title>
                            <Title>Cash: {(userInfo.cach)}</Title>
                        </Infocontainer>
                        <FollowConatiner>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            {/* //! deh el mafrod tezhr lama tzor /profile/:id not /profile :D */}
                        {
                          useParams().userID &&
                          <Followbtn>Follow</Followbtn>
                        }
                        </FollowConatiner>
                </UserInfo>
                  {/* // ))} */}
                <AddMoneyContainer>
                    <div className="input-group input-group-icon">
                      <input onChange={e=>setAdditionalCach(e.target.value)} value={additionalCach} className="input" type="number" placeholder="ADD MONEY TO YOUR CASH" />
                      <div className="input-icon">
                          <i class="bi bi-currency-dollar"></i>
                      </div>
                    </div>
                    <button className='add-btn' onClick={(e)=>DepositeCach(e)}>ADD</button>
                </AddMoneyContainer>
                {/* Add PRODUCT */}

                <MyProductsContainer>
                    <Titleinfo>
                        <ProductTitle>My Products</ProductTitle>
                <>
                <Link to="/add">
                <button className="addProductButton" type="submit">Add New Product</button>

                </Link>
                </>
                        <hr/>
                    </Titleinfo>
                    <ItemContainer>
                        {offeredProducts.map((item, index) => (
                          // <SingleProduct product={item} key={index} />
                          

                          <Item key={index}>
                                    <ImgContainer>
                                        <img src={item.image} alt={item.name} />

                                    </ImgContainer>

                                    <Bottom>
                                        <Productname>{item.name}</Productname>
                                        <Owner>{item.owner.username}</Owner>
                                        <PriceContainer>
                                            <Price>${item.price}</Price>
                                        </PriceContainer>
                                    </Bottom>
                                </Item>
                            ))}
                    </ItemContainer>
                </MyProductsContainer>

                <PurchasedContainer>
                  <button className='add-btn' onClick={e=>showPurchasedProducts(e)} >fetch purchased</button>
                    <Titleinfo>
                        <ProductTitle>Purchased Products</ProductTitle>
                        <hr/>
                    </Titleinfo>


                            <Tablecontainer>
                              <ul className="responsive-table">
                                <li className="table-header">
                                  <div className="col col-1">Product ID</div>
                                  <div className="col col-2">Product NAME</div>
                                  {/* <div className="col col-3">Product OWNER</div> */}
                                  <div className="col col-4">Product PRICE</div>
                                </li>
                                 {purchasedOfLoggedIn.map((order, index) => (
                                <li className="table-row" key={index}>
                                    <div class="col col-1" data-label="Product ID">{order._id}</div>
                                    <div class="col col-2" data-label="Product NAME">{order.name}</div>
                                    {/* <div class="col col-3" data-label="Product OWNER">{order.owner.username}</div> */}
                                    <div class="col col-4" data-label="Product PRICE">${order.price}</div>
                                </li>
                                ))}
                              </ul>
                            </Tablecontainer>

                </PurchasedContainer>

               <PurchasedContainer>
                    <Titleinfo>
                        <ProductTitle>Selled Products</ProductTitle>
                        <hr/>
                    </Titleinfo>
                            <Tablecontainer>
                              <ul className="responsive-table">
                                <li className="table-header">
                                  <div className="col col-1">Product ID</div>
                                  <div className="col col-5">Product NAME</div>
                                  <div className="col col-4">Product PRICE</div>
                                </li>
                                 {soldProducts.map((order, index) => (
                                <li className="table-row" key={index}>
                                    <div class="col col-1" data-label="Product ID">{order._id}</div>
                                    <div class="col col-5" data-label="Product NAME">{order.name}</div>
                                    <div class="col col-4" data-label="Product PRICE">${order.price}</div>
                                </li>
                                ))}
                              </ul>
                            </Tablecontainer>
                </PurchasedContainer>


<Report onClick={e=>{
  e.preventDefault();
  showPurchasedProducts(e);
  window.location.href = "/report";
}} >Get Report</Report>

                 {/* <Report type='button'>Get Report</Report> */}
                 

                
            </Container>
        </Section>
    )
}

export default UserProfile
