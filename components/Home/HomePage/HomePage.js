"use client";
import { lazy, Suspense } from "react";
import styled from "styled-components";
import Hero from "../Hero/Hero"
import HomeFetch from "./HomeFetch"
const HomePage = () => {
    return (
        <Container>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <HomeFetch />
            </Suspense>
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    overflow: hidden;
`;
