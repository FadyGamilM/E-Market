// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// //* FOR REDUX
// import { listProducts } from '../actions/productActions';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { addToCart } from '../actions/cartActions';
// import {addToCartRequest} from "../apiCalls"
// //**********************************************************

// import styled from "styled-components";
// import { forMenCat } from "../data";
// import { Search } from "@material-ui/icons";

// const Section = styled.section`
// 	padding: 0 0 0.1rem 0;
// 	overflow: hidden;
// `;

// const Container = styled.div`
// 	max-width: 80rem;
// 	margin: 1.5rem auto;

// 	@media only screen and (max-width: 1200px) {
// 		padding: 0 3rem;
// 	}

// 	@media only screen and (max-width: 768px) {
// 		max-width: 60rem;
// 	}
// `;

// const MyProductsContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	margin-top: 5rem;
// `;
// const Titleinfo = styled.div`
// 	text-align: left;
// 	margin-bottom: 3rem;
// `;

// const ProductTitle = styled.h1`
// 	font-size: 2rem;
// 	font-weight: 500;
// 	margin-bottom: 1.5rem;
// `;
// const ItemContainer = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
// 	gap: 3rem;
// 	padding: 0 4.5rem;
// 	margin-bottom: 5rem;
// 	justify-items: center;
// `;

// const IconContainer = styled.div`
// 	position: absolute;
// 	right: 0;
// 	bottom: 0.6rem;
// 	background-color: #fff;
// 	border-radius: 50%;
// 	padding: 1.3rem 1.6rem;
// 	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
// 	transition: all 300ms ease-in-out;

// 	:hover {
// 		background-color: #60a5fa;
// 		color: #fff;
// 	}

// 	&.disabled {
// 		pointer-event: none;
// 		cursor: default;
// 	}
// `;
// const Item = styled.div`
// 	overflow: hidden;
// 	max-width: 15rem;
// 	i {
// 		transition: all 300ms ease-in-out;
// 	}
// 	:hover ${IconContainer} {
// 		border-radius: 1rem 0 0 0;
// 	}
// `;
// const ImgContainer = styled.div`
// 	position: relative;

// 	img {
// 		object-fit: cover;
// 		height: 100%;
// 		width: 100%;
// 	}
// `;

// const Bottom = styled.div`
// 	padding: 1rem;
// 	text-align: left;
// `;
// const Productname = styled.h1`
// 	font-weight: inherit;
// 	font-size: 1.5rem;

// 	:hover {
// 		color: #60a5fa;
// 	}
// `;
// const Price = styled.span`
// 	color: #60a5fa;
// 	font-size: 1.3rem;
// `;
// const Owner = styled.p`
// 	text-align: right;
// 	color: #828282;
// `;
// const PriceContainer = styled.div`
// 	text-align: right;
// `;

// const Input = styled.input`
// 	width: 95%;
// 	border: none;
// `;

// const SearchContainer = styled.div`
// 	border: 0.5px solid lightgray;
// 	display: flex;
// 	align-items: center;
// 	margin-left: 30%;
// 	padding: 5px;
// 	max-width: 30rem;
// 	margin-bottom: 3rem;
// 	margin-right: 30%;
// `;
// const Select = styled.select`
//   font-family: 'Poppins', sans-serif;
//   width: 4.5rem;
//   padding: 0.3rem;
//   border: 1px solid #3a3b3c;
//   appearance: none;
//   outline: none;
//   font-weight: 600;
//   cursor: pointer;
// `;
// const Details =styled.div`
//       display: grid;
//     grid-template-columns: 1fr 1.2fr;
//     gap: 7rem;

// `

// const ImageContainer =styled.div`
//     height: 20rem;
//   background-color: #f6f2f1;
//   text-align: center;

//   img {
//     height: 100%;
//     object-fit: contain;
//   }

//   @media (max-width: 650px) {
//     width: 6rem;
//     height: 6rem;
//   }
// `
// const Right = styled.div`
//   display:flex;
//   align-content: flex-start;
//     flex-direction: column;
//     align-items: flex-start;
//     flex-wrap: nowrap;
//   div {
//     position: relative;
//     z-index: 1;
//   }

//   @media (max-width: 650px) {
//     margin-top: 5rem;
//   }
// `;
// const Title = styled.h1`
//   font-size: 4rem;
//   line-height: 1.2;
//   margin-bottom: 2rem;
// `;


// const Form = styled.form`
//     margin-bottom: 5rem;

//     div {
//     display: inline-block;
//     position: relative;
//     z-index: 1;

//         span {
//         position: absolute;
//         top: 50%;
//         right: 0.6rem;
//         transform: translateY(-60%);
//         font-size: 0.6rem;
//         z-index: 0;
//         pointer-events: none;
//         }

//     }
// `;


// const AddtocartLink = styled(Link)`
//   display: inline-block;
//   background:  #60A5FA;
//   padding: 0.8rem 4rem;
//   color: var(--white);
//   border-radius: 1rem;
//   margin-bottom: 2rem;
//     transition: all 300ms ease-in-out;
//     color:#fff;
//     border: 1px solid white;

//          &:hover{
//     background-color: white;
//     border:1px solid #60A5FA;
//     color:black;
//   }

// `


// const Category = () => {
// 	const cartCount = 0;
	
// const quantity =[1,2,3,4,5,6,7,8,9,10];
// 	//! step (1) get category name to fetch products for 
//    const {category} = useParams();
//    //! define dispatch variable to dispatch the action
//    const dispatch = useDispatch();
//    //! fetch the data for this category
//    useEffect(() => {
// 		dispatch(listProducts(category))
//    }, [dispatch])
//    //! to access the productList data from redux state to fetch them into the component
//    const productList = useSelector(state=>state.productList)
//    const { loading, error, products} = productList
// 	const addToCartHandler = (e, itemID)=>{
// 		e.preventDefault()
// 		addToCartRequest(itemID);
// 	}
	
//    return (
//       <div>
//          <h1>
//             {category} category
//          </h1>
//          <Section>
// 			<Container>
// 				<MyProductsContainer>
// 					<Titleinfo>
// 						<ProductTitle> {category}</ProductTitle>
// 						<hr />
// 					</Titleinfo>

// 					<SearchContainer>
// 						<Input type="text" name="search_bar" placeholder="Search" />
// 						<Search style={{ color: "gray", fontSize: 16 }} />
// 					</SearchContainer>
// 					{loading? <div>Loading ...</div>:
// 					<ItemContainer>
// 						{products.map((item, index) => (
// 							<Item key={index}>
// 								<ImgContainer>
// 									<img src="/assets/images/product3.jpg" alt={item.name} />
// 									<IconContainer onClick={(e) => addToCartHandler(e, item._id)}>
// 										<i className="fas fa-shopping-cart"></i>
// 									</IconContainer>
// 								</ImgContainer>
// 								<Bottom>
// 									<Productname>{item.name}</Productname>
// 									<Owner>{item.owner}</Owner>
// 									<PriceContainer>
// 										<Price>${item.price}</Price>
// 									</PriceContainer>
// 									<Select>
// 										{quantity.map(x=>(
// 												<option key={x} value={x}>{x}</option>
// 										))}
// 									</Select>
// 									{/* <AddtocartLink to={`/cart`}>Add To Cart</AddtocartLink> */}

// 								</Bottom>
// 							</Item>
// 						))}
// 					</ItemContainer>
// 					}
// 				</MyProductsContainer>
// 			</Container>
// 		</Section>


//       </div>
//    )
// }

// export default Category

import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//* FOR REDUX
import { listProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../actions/cartActions';
import {addToCartRequest} from "../apiCalls"

//**********************************************************

import styled from "styled-components";
import { forMenCat } from "../data";
import { Search } from "@material-ui/icons";

const Section = styled.section`
	padding: 0 0 0.1rem 0;
	overflow: hidden;
`;

const Container = styled.div`
	max-width: 80rem;
	margin: 1.5rem auto;

	@media only screen and (max-width: 1200px) {
		padding: 0 3rem;
	}

	@media only screen and (max-width: 768px) {
		max-width: 60rem;
	}
`;

const MyProductsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5rem;
`;
const Titleinfo = styled.div`
	text-align: left;
	margin-bottom: 3rem;
`;

const ProductTitle = styled.h1`
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 1.5rem;
`;
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
		background-color: #60a5fa;
		color: #fff;
	}

	&.disabled {
		pointer-event: none;
		cursor: default;
	}
`;
const Item = styled.div`
	overflow: hidden;
	max-width: 15rem;
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
`;
const Productname = styled.h1`
	font-weight: inherit;
	font-size: 1.5rem;

	:hover {
		color: #60a5fa;
	}
`;
const Price = styled.span`
	color: #60a5fa;
	font-size: 1.3rem;
`;
const Owner = styled.p`
	text-align: right;
	color: #828282;
`;
const PriceContainer = styled.div`
	text-align: right;
`;

const Input = styled.input`
	width: 95%;
	border: none;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 30%;
	padding: 5px;
	max-width: 30rem;
	margin-bottom: 3rem;
	margin-right: 30%;
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
const Details =styled.div`
      display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 7rem;

`

const ImageContainer =styled.div`
    height: 20rem;
  background-color: #f6f2f1;
  text-align: center;
  position: relative

  img {
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 650px) {
    width: 6rem;
    height: 6rem;
  }
`
const Right = styled.div`
  display:flex;
  align-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
  div {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 650px) {
    margin-top: 5rem;
  }
`;
const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;


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


const AddtocartLink = styled(Link)`
  display: inline-block;
  background:  #60A5FA;
  padding: 0.8rem 4rem;
  color: var(--white);
  border-radius: 1rem;
  margin-bottom: 2rem;
    transition: all 300ms ease-in-out;
    color:#fff;
    border: 1px solid white;

         &:hover{
    background-color: white;
    border:1px solid #60A5FA;
    color:black;
  }

`




const Category = () => {


	const [searchitem, setsearch]=useState("");
	const cartCount = 0;
	function testFunc (){
// document.getElementById("hiddenOne").click();
	}
	window.onload = function() {
		if(!window.location.hash) {
		  window.location = window.location + '#loaded';
		  window.location.reload();
		}
}
const quantity =[1,2,3,4,5,6,7,8,9,10];
	//! step (1) get category name to fetch products for 
   const {category} = useParams();
   //! define dispatch variable to dispatch the action
   const dispatch = useDispatch();
   //! fetch the data for this category
   let userLogin = useSelector(state=>state.userLogin);
	let {userInfo} = userLogin;
	useEffect(() => {
		dispatch(listProducts(category))
   }, [dispatch])
   //! to access the productList data from redux state to fetch them into the component
   const productList = useSelector(state=>state.productList)
   const { loading, error, products} = productList
	const addToCartHandler = (e, itemID)=>{
		e.preventDefault()
		addToCartRequest(itemID);
	}


	const users = JSON.parse(localStorage.getItem('allUsers'));
  const current_user = JSON.parse(localStorage.getItem('userInfo'));
 console.log("Allusers",users);
 console.log("currentuser",current_user);
 const [ownername, setownername] = useState("");

	// let AllStoreUsers = [];
	
	// // we have all users
	// users.forEach(user => AllStoreUsers.push(user));
	// AllStoreUsers.push(current_user);
	// console.log("AllStoreUsers", AllStoreUsers);
	// // we have all filtered products
	// console.log('Filtered', products);
	// const owner_product_combination = [];
	// AllStoreUsers.forEach(storeUser=>{
	// 	// get the offered products of this user and map through it 
	// 	let offeredProducts = storeUser.offeredProducts;
	// 	offeredProducts.forEach(offeredProduct=>{
	// 		if(products.includes(offeredProduct)){
	// 			owner_product_combination.push(
	// 				{
	// 					owner: storeUser.username,
	// 					productID: offeredProduct
	// 				}
	// 			)
	// 		}
	// 	})
	// })



	let newproducts=[];
	let i=0;
	//  people.find(person => person.name === 'john');
	products.forEach(product => {
		users.forEach(user=>{
			if(product.owner===user._id){
				
					newproducts[i]={}; //create object
					newproducts[i].owner_name=user.username;
					newproducts[i].prod_name=product.name;
					newproducts[i].price=product.price;
					newproducts[i].image=product.image;
					newproducts[i].category=product.category;
					newproducts[i].prod_id=product._id;
					newproducts[i].user_id = user._id;
					i+=1;
			}
			
		});
		
			newproducts[i]={}; //create object
			newproducts[i].owner_name=current_user.username;
			newproducts[i].prod_name=product.name;
			newproducts[i].price=product.price;
			newproducts[i].image=product.image;
			newproducts[i].category=product.category;
			newproducts[i].prod_id=product._id;
			newproducts[i].user_id = current_user._id;
		i+=1;
	});
	
	console.log('newproduct',newproducts);
   return (
      <div>
         <h1>
            {category} category
         </h1>
			<button style={{display: 'none'}} id="hiddenOne" onClick={testFunc} >hidden button</button>
         <Section>
			<Container>
				<MyProductsContainer>
					<Titleinfo>
						<ProductTitle> {category}</ProductTitle>
						<hr />
					</Titleinfo>

					<SearchContainer>
						<Input type="text" name="search_bar" placeholder="Search" onChange={(e)=>setsearch(e.target.value)} />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
					{loading? <div>Loading ...</div>:
					<ItemContainer>
{newproducts.filter((item)=>
						{
							const k=item.owner_name;
							if (searchitem=="")
							{return item}
							else if(k.toLowerCase().includes(searchitem.toLowerCase()))
							{
								return item
							}
						}
						).map((item, index) => (
							<Item key={index}>
								<ImageContainer>
									{/* <img src="/assets/images/product3.jpg" alt={item.name} /> */}
									<img src={item.image} alt={item.prod_name} />
									<IconContainer onClick={(e) => addToCartHandler(e, item.prod_id)}>
										<i className="fas fa-shopping-cart"></i>
									</IconContainer>
								</ImageContainer>
								<Bottom>
									<Productname>{item.prod_id}</Productname>
									<Owner>{item.owner_name}</Owner>
									<PriceContainer>
										<Price>${item.price}</Price>
									</PriceContainer>
									{/* <Select>
										{quantity.map(x=>(
												<option key={x} value={x}>{x}</option>
										))}
									</Select> */}
									{/* <AddtocartLink to={`/cart`}>Add To Cart</AddtocartLink> */}

								</Bottom>
							</Item>
						))}
					</ItemContainer>
					}
				</MyProductsContainer>
			</Container>
		</Section>


      </div>
   )
}

export default Category
