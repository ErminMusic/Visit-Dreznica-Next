"use client";
import styled from "styled-components";
import Hero from "../Hero/Hero";
import HomeFetch from "./HomeFetch";

const HomePage = ({ data }) => {
    return (
        <Container>
            <Hero />
            <HomeFetch data={data} />
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    overflow: hidden;
    scroll-margin-top: 80px;
`;

export async function getStaticProps() {
    const data = await fetchData();
    return {
        props: {
            data,
        },
    };
}