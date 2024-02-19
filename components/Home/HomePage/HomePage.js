"use client";
import styled from "styled-components";
import Hero from "../Hero/Hero";
import HomeFetch from "./HomeFetch";
const HomePage = () => {
    return (
        <Container>
            <Hero />
            <HomeFetch />
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    overflow: hidden;
`;
