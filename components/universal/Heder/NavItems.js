import styled from "styled-components";
import Dropdown from "./Dropdown";
import Link from "next/link";

function NavItems() {
    let activities = ["Activities", "Nearby Attractions"];
    let about = ["About Drežnica", "About Us"];
    const title = {
        home: "Home",
        howTo: "How To Book",
        FAQ: "FAQ",
        Contact: "Contact",
    };

    return (
        <Container>
            <NavBarItem>
                <span>
                    <Link href="/">{title.home}</Link>
                </span>
            </NavBarItem>
            <NavBarItem>
                <Dropdown title="About Us" options={about} />
            </NavBarItem>
            <NavBarItem>
                <Dropdown title="Activities" options={activities} />
            </NavBarItem>
            <NavBarItem>
                <span>
                    <Link href="/How To Book">{title.howTo}</Link>
                </span>
            </NavBarItem>
            <NavBarItem>
                <span>
                    <Link href="/Contact">{title.Contact}</Link>
                </span>
            </NavBarItem>
            <NavBarItem>
                <span>
                    <Link href="/FAQ">{title.FAQ}</Link>
                </span>
            </NavBarItem>
        </Container>
    );
}

export default NavItems;

const Container = styled.nav`
    display: flex;
    justify-content: space-evenly;
    z-index: 100;
    @media (max-width: 990px) {
        justify-content: space-between;
        padding: 0 12px;
    }
    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: start;
        padding: 8px 0;
        position: relative;
    }
`;
const NavBarItem = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    @media (max-width: 850px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 8px;
        min-height: 52px;
    }
    span {
        font-size: 13px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        position: relative;
        &::after {
            content: "";
            height: 2.5px;
            background: #ffffff;
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
    a {
        text-decoration: none;
        color: white;
        z-index: 1;
    }
`;
