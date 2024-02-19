"use client";
import styled from "styled-components";
import TextHolder from "./TextHolder";
import Buttons from "./Buttons";
import Background from "./Background";

function Hero() {
    return (
        <Wrap>
            <Background />
            <Container>
                <ContentHolder>
                    <TextHolder />
                    <Buttons />
                </ContentHolder>
            </Container>
        </Wrap>
    );
}

export default Hero;

const Wrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
`;
const Container = styled.div`
    width: 80%;
    color: white;
    z-index: 100;
    display: flex;
    align-items: center;
    @media (max-width: 850px) {
        width: 95%;
    }
`;
const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
