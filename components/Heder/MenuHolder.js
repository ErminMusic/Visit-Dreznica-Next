import { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import NavItems from "./NavItems";

function MenuHolder() {
    const menuRef = useRef(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);
    return (
        <>
            <NavBar ref={menuRef} $isMenuOpen={isMenuOpen}>
                <NavItems />
            </NavBar>
            <Container>
                {isMenuOpen ? (
                    <CustomClose onClick={toggleMenu} />
                ) : (
                    <CustomMenu onClick={toggleMenu} />
                )}
            </Container>
        </>
    );
}

export default MenuHolder;

const Container = styled.div`
    display: none;
    @media (max-width: 850px) {
        display: block;
    }
`;

const NavBar = styled.div`
    width: 68%;
    z-index: 100;
    @media (max-width: 900px) {
        width: 70%;
    }
    @media (max-width: 850px) {
        position: absolute;
        top: 0;
        right: 0;
    }
    @media (max-width: 850px) {
        transform: ${({ $isMenuOpen }) =>
            $isMenuOpen ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;
        background: #4b7376;
        position: fixed;
        padding: 0 16px;
        height: auto;
        width: 250px;
        top: 80px;
        right: 0;
        z-index: 1;
    }
`;

const CustomMenu = styled(MenuIcon)`
    &.MuiSvgIcon-root {
        font-size: 36px;
        cursor: pointer;
        color: white;
    }
`;
const CustomClose = styled(CloseIcon)`
    &.MuiSvgIcon-root {
        font-size: 36px;
        cursor: pointer;
        color: white;
    }
`;
