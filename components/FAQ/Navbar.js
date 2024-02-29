import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Navbar({ category }) {
    Navbar.propTypes = {
        category: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <Wrap>
            <Container menuVisible={menuVisible}>
                {menuVisible && (
                    <>
                        {category.map((item, index) => (
                            <div key={index}>
                                <NavItem href={`#${item.link}`}>
                                    <span>{item.name}</span>
                                </NavItem>
                            </div>
                        ))}
                    </>
                )}
            </Container>
            <ArrowIconWrapper onClick={toggleMenu}>
                {menuVisible ? <CustomUpArrow /> : <CustomDownArrow />}
            </ArrowIconWrapper>
        </Wrap>
    );
}

export default Navbar;

const Wrap = styled.nav`
    width: 100%;
    min-height: 55px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #d4efd4;
    position: sticky;
    top: 80px;
    z-index: 90;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    gap: 12px;
    width: 80%;
    padding: ${(props) => (props.menuVisible ? "16px" : "0")};
       max-height: ${(props) => (props.menuVisible ? "500px" : "0")}; 
    overflow: hidden; 
    transition: max-height 0.3s ease; 
    @media (max-width: 850px) {
        width: 95%;
    }
    div {
        margin: 8px 0;
    }
`;

const NavItem = styled.a`
    font-weight: bold;
    color: #525252;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    height: 100%;
    @media (max-width: 700px) {
        justify-content: start;
    }
    span {
        letter-spacing: 1.5px;
        text-transform: uppercase;
        position: relative;
        &::after {
            content: "";
            height: 2.5px;
            background: #525252;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -4px;
            opacity: 0;
            transform: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
`;

const ArrowIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 100%;
    margin: 8px 0;
    cursor: pointer;
`;

const CustomDownArrow = styled(KeyboardArrowDownIcon)`
    &.MuiSvgIcon-root {
        font-size: 36px;
        color: #525252;
    }
`;

const CustomUpArrow = styled(KeyboardArrowUpIcon)`
    &.MuiSvgIcon-root {
        font-size: 36px;
        color: #525252;
    }
`;
