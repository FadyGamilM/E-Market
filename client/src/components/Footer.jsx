import React from 'react'
import styled from "styled-components";

const Container = styled.div`

    grid-area: footer;
  padding: 3rem 1rem;
  line-height: 1rem;
  background-color: #222;
  text-align:center;
`
const Text = styled.p`
    letter-spacing: 0.6em;
    color:white;
`

const Footer = () => {
    return (
        <div>
            <Container>
                <Text>
                    © COPY RIGHT BY 2021
                </Text>
            </Container>
        </div>
    )
}

export default Footer
