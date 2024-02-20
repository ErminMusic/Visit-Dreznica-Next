import styled from "styled-components";
import PropTypes from "prop-types";

function Navbar({ category }) {
    Navbar.propTypes = {
        category: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    return (
        <Wrap>
            <Container>
                {category.map((item, index) => (
                    <div key={index}>
                        <NavItem href={`#${item}`}>
                            <span>{item}</span>
                        </NavItem>
                    </div>
                ))}
            </Container>
        </Wrap>
    );
}

export default Navbar;

const Wrap = styled.nav`
    width: 100%;
    min-height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0fff0;
    position: sticky;
    top: 80px;
    z-index: 90;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    gap: 12px;
    width: 80%;
    padding: 16px;
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
    text-decoration: none;
    font-size: 16px;
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
