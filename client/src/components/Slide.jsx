import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color:#BFDBFE;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
    @media (max-width: 996px) {
    right: -10%;
  }
  @media (max-width: 567px) {
    right: -18%;
  }
`;

const Image = styled.img`
  height: 90%;
  @media (max-width: 1200px) {
      height: 50rem;
    }
    @media (max-width: 996px) {
      height: 35rem;
    }
    @media (max-width: 567px) {
      height: 30rem;
    }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
  padding-right:0;
  @media (max-width: 996px) {
    top: 30%;
  }
  @media (max-width: 567px) {
    top: 25%;
  }
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover{
    background-color: white;
    color:black;
  }
`;

const slide = () => {
    return (
        <Container>
            <Wrapper>
                <Slide>
                    <InfoContainer>
                        <Title>Exclusive Sales</Title>
                        <Desc>UP TO 50% OFF ON SALES</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src="/assets/slide.png"/>
                    </ImgContainer>
                </Slide>
            </Wrapper>
        </Container>

    );
}

export default slide
