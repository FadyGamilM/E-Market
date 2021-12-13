import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  height: 45rem;
  padding: 3rem;
 max-width: 114rem;
 margin-right:auto;
 margin-left:auto;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
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
const Price = styled.div`
  font-size: 600;
  font-size: 2rem;
  color: var(--primary);
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
const Owner = styled.p`
text-align:right;
   color:#828282;
`

const quantity =[1,2,3,4,5,6,7,8,9,10];
const ProductScreen = () => {
    return (
        <Container>
            <Details>
                <ImageContainer>
                         <img src="assets/images/product5.jpg" alt='' />
                </ImageContainer>
                <Right>
                    <Title>shirt</Title>
                    <Owner>GUCCI</Owner>
                    <Price>$600</Price>
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

                        <AddtocartLink to={`/cart`}>Add To Cart</AddtocartLink>
                </Right>
            </Details>
        </Container>
    )
}

export default ProductScreen
