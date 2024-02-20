"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollToTopButton = () => {
    const UpIcon = "/Icons/Up.webp";
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <Container
            onClick={scrollToTop}
            style={{ display: isVisible ? "block" : "none" }}
        >
            <CustomImage src={UpIcon} width={50} height={50} alt="Arrow Up" />
        </Container>
    );
};

export default ScrollToTopButton;

const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4b7376;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0 0 5px;
    &:hover {
        transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        scale: 1.1;
    }
`;

const CustomImage = styled(Image)`
    width: 40px;
    height: 40px;
`;
