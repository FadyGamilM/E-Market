import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {cartItems} from '../data';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from "react-redux";
import { addToCart } from '../actions/cartActions';
import {useNavigate} from "react-router-dom"
import {PurchaseProducts } from "../apiCalls";


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

// const Wrapper =styled.div`
//    border: 1px solid black;
//    border-radius =1rem;

// `;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    tr:nth-child(even){background-color: #F9FAFB;}
    tr:hover {background-color: #ddd;}
`;

const Th = styled.th`
  text-align: left;
  padding: 0.5rem;
  color: #fff;
  background-color: #60A5FA;
  font-weight: normal;
`;

const Td = styled.td`
  padding: 1rem 0.5rem;

  img {
    width: 8rem;
    height: 8rem;
    margin-right: 1rem;
  }

  &.total {
    font-weight: 700;
  }
`;
const Price = styled.div`
  padding-top: 0.7rem;
  font-weight: bold;
  font-size:1.3rem;
  vertical-align: text-top;
`

const CartInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.p`
  
  font-weight:bold;
  padding-bottom:0.5rem;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Delete =styled.button`
    width: 90px;
	height: 30px;
	cursor: pointer;
	display: flex;
	align-items: center;
    border: none;
	border-radius: 5px;
	box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
	background: #e62222;
    /*font-size: 1rem;*/
    padding:0;
    margin-top:0.5rem;
    transition: 200ms;


:hover{
    background: #ff3636;
}    

:focus{
    outline: none;
}

span{
    transition: 200ms;
}

svg{
    width: 9px;
	fill: #eee;
}
`
const Form = styled.form`
    margin-bottom: 5rem;

    div {
    display: inline-block;
    position: relative;
    z-index: 1;

        span {
        position: absolute;
        top: 50%;
        right: 0.6rem;
        transform: translateY(-60%);
        font-size: 0.6rem;
        z-index: 0;
        pointer-events: none;
        }

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

const TotalPrice=styled.div`
   display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  margin-right:1rem;
 div {
    margin-left: auto;

  }
`;
const TotalTable = styled.table`
  border-top: 4px solid #60A5FA;
  width: 100%;
  max-width: 18rem;

  td{
    padding: 0.7rem 0rem;
  }

    tr:hover {background-color: #ddd;}
  td:nth-child(even){ text-align: right;}
`;

const TotalLink=styled.button`
  display: inline-block;
  color:#fff;
  background-color: #60A5FA;
  padding: 1rem 1rem;
    font-size: 1rem;
  font-weight: 500;
  border-radius: 3rem;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
    margin: 1rem 3rem;
    transition: all 300ms ease-in-out;

      &:hover{
    background-color: white;
    border:1px solid #60A5FA;
    color:black;
  }
`;

// const ShippingDetails =styled.div`

// `

const quantity =[1,2,3,4,5,6,7,8,9,10];
let totalPrice = 0;
let subTotalPrice = 0;



const ShoppingCart = () => {
    const cart = useSelector(state=>state.cart);
        console.log("cart items are : ",Object.values(cart)[0])
        const cartItems = Object.values(cart)[0];
    const navigate = useNavigate()

    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;

    cartItems.forEach(item=>{
        subTotalPrice += Number(item.price);
    })
    totalPrice = subTotalPrice + subTotalPrice*0.1;

    const handleDeleteItem = (e, itemID, itemPrice)=>{
        subTotalPrice -= itemPrice;
        totalPrice = subTotalPrice + subTotalPrice *0.1
        e.preventDefault();
        // get all items from localStorage
        // (we already got them above)        
        // filter the products to remove the matched item
        const filtered = cartItems.filter(item=> {
            return item._id!==itemID;
        } );
        // set the local storage with update items
        localStorage.setItem('cartItems', JSON.stringify(filtered))
        window.location.href = "/cart"
    }

    const confirmPurchase = (e)=>{
        e.preventDefault();
        if(userInfo.cach >= totalPrice){
            // get the cart items
            const allItemsInCart = JSON.parse(localStorage.getItem('cartItems'));
            console.log("[shoppingCart component]: all items in cart ", allItemsInCart);
            const itemsIds = [];
            allItemsInCart.forEach(item=>itemsIds.push(item._id));
            PurchaseProducts(totalPrice, itemsIds);
            localStorage.removeItem('cartItems');
            window.location.href="/"
        }
    }
    return (
        <Container>
            {/* <Wrapper> */}
                <Table>
                    <thead>
                        <tr>
                            <Th>Product</Th>
                            <Th>Subtotal</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) =>(
                            <tr key={item._id}>
                                <Td>
                                    <CartInfo>
                                        {/* <Link to={`/products/${item._id}`}> */}
                                            <img src={item.image} alt={item.name} />
                                        {/* </Link> */}
                                        <div>
                                            {/* <Link to={`/products/${item._id}`}> */}
                                                <Title>{item.name}</Title>
                                            {/* </Link> */}
                                            <span>Price: ${item.price}</span>
                                            <br />
                                            <Delete onClick={e=>handleDeleteItem(e, item._id, item.price)}><span className="text">Delete</span><span class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                                                    </span></Delete>
                                        </div>
                                    </CartInfo>
                                </Td>
                                {/* <Td>
                                    <Form>
                                        <div>
                                            <Select>
                                                {quantity.map(x=>(
                                                    <option key={x} value={x}>{x}</option>
                                                ))}
                                            </Select>
                                            <span><i className='fas fa-chevron-down'></i></span>
                                        </div>
                                        
                                    </Form>
                                </Td> */}
                                <Price>
                                    <Td>${item.price}</Td>
                                </Price>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <TotalPrice>
                    <div>
                        <TotalTable>
                             {/* {cartItems.map(item =>( */}
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>${subTotalPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td className='total'>${totalPrice}</td>
                                    </tr>
                                </tbody>
                                {/*))}*/}
                        </TotalTable>
                        <TotalLink type='button' onClick={e=>confirmPurchase(e)}>Proceed To Checkout </TotalLink>
                    </div>
                </TotalPrice>

        </Container>
    )
}

export default ShoppingCart
