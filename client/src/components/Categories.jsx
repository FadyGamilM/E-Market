import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
//import { categories } from "../data";
//import CategoryItem from "./CategoryItem"; 
import {CollectionData} from '../data';
import {fetchCategoryProducts} from "../apiCalls"

const Container = styled.div`
    font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  display: grid;
  padding: 100px;
  padding-top:0;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

@media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }


`;

const Section = styled.section`
    padding: 2rem 0 0.1rem 0;
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

const Itemtitle = styled.h3`
font-family: 'Open Sans', sans-serif;
  background-color: rgba(1, 0, 0, 0.363);
  border-radius: 5rem;
  padding: 0.7rem 1.4rem;
  font-size: 1.2rem;
  font-weight: inherit;
  margin-bottom: 1rem;
  transition: all 300ms ease-in-out;
  color:#ffffff;

  :hover a{
      color:black;
  }
`;

const Item = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;

    img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 500ms ease-in-out;
  }
   :hover ${Itemtitle} {
    background-color: #ffffff;
    color: black;
  }

  :hover img {
    transform: scale(1.2);
  }

::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 500ms ease-in-out;
  }

  :hover::after {
    visibility: visible;
    opacity: 1;
  }


`;


const Infocontainer = styled.div`
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  text-align: center;
  z-index: 3;
  color:black;
`;

const Collectionlink = styled(Link)`
  color:#ffffff;
    transition: all 300ms ease-in-out;
  font-size: 1.4rem;

  :hover {
    color: #60A5FA;
  }
`


const Categories = () => {
  const fetchCategoryProductsHandler = (e, category)=>{
    e.preventDefault();
    // fetch all products of this category
    console.log("[Categories component] : calling fetchCategoryProducts apiCall now... ");
    fetchCategoryProducts(category);
    window.location.href = `/products/${category}`;
  }
    return (
        <div>
            <Section>
                <Titleinfo>
                    <Title>Shop Categories</Title>
                    <Subtitle>Select from the premium product and save plenty money</Subtitle>
                </Titleinfo>
            <Container>
                 {CollectionData.map((item, index) => (
                        <Item key={index}>
                            <img src={item.url} alt={item.label} />
                            <Infocontainer>
                                <Itemtitle>
                                    <Link onClick={e=>fetchCategoryProductsHandler(e, item.path)} to={`/products/${item.path}`}>{item.label}</Link>
                                </Itemtitle>
                                <Collectionlink onClick={e=>fetchCategoryProductsHandler(e, item.path)} to={`/products/${item.path}`}>SHOP NOW</Collectionlink>
                            </Infocontainer>
                        </Item>
                    ))}
            </Container>

            </Section>


      {/* {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))} */}
        </div>
    )
}

export default Categories
