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
                    {/* <a href="https://freetools.seobility.net/en/seocheck/visitdreznica.netlify.app">
                        <img
                            src="https://freetools.seobility.net/widget/widget.png?url=visitdreznica.netlify.app"
                            alt="Seobility Score für visitdreznica.netlify.app"
                        />
                    </a> */}
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
