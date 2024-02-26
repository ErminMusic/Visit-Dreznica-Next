"use client";
import dynamic from "next/dynamic";
import styled from "styled-components";
const FooterLinks = dynamic(() =>  import("./FooterLinks"));
const Map = dynamic(() =>  import("./Map"));

function Footer() {
    return (
        <Wrap>
            <Container>
                <FooterLinks />
                <Map />
            </Container>
        </Wrap>
    );
}

export default Footer;

const Wrap = styled.div`
    width: 100%;
    background-color: #507d7f;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px 0 24px 0;
    color: #ffff;
`;
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 850px) {
        flex-direction: column;
    }
`;