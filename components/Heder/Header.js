"use client";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import MenuHolder from "./MenuHolder";

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

const Wrapper = styled.div`
    height: 80px;
    width: 100%;
    background: #4b7376;
    display: flex;
    justify-content: center;
    color: white;
    position: sticky;
    top: 0;
    z-index: 100;
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
