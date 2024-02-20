"use client";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import dynamic from "next/dynamic";
const MenuHolder =  dynamic(() => import(("./MenuHolder")));

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <HeaderLogo />
                <MenuHolder />
            </Container>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
    height: 80px;
    width: 100%;
    background: #4b7376;
    display: flex;
    justify-content: center;
    color: white;
`;
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    a {
        text-decoration: none;
    }
    @media (max-width: 991px) {
        width: 100%;
        padding: 0 15px;
    }
`;
