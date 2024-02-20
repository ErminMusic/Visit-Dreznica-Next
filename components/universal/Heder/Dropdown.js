import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import Link from "next/link";

function Dropdown({ title, options }) {
    Dropdown.propTypes = {
        title: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
            })
        ),
    };

    return (
        <Container>
            <Wrapp>
                <span>{title}</span>
                <CustomArrow />
            </Wrapp>
            <Drop>
                {options.map((item, index) => (
                    <DropOptions
                        href={`/${item.link}`}
                        key={index}
                    >
                        {item.name}
                    </DropOptions>
                ))}
            </Drop>
        </Container>
    );
}
const CustomArrow = styled(KeyboardArrowDownIcon)`
    &.MuiSvgIcon-root {
        font-size: 36px;
    }
`;
const Drop = styled.div`
    background: #4b7376;
    position: absolute;
    width: 200px;
    top: calc(100% + 10px);
    margin: 5px 0;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease,
        max-height 0.3s ease;
    transform-origin: top center;
    transform: translateY(-50%);
    @media (max-width: 850px) {
        transform: translateY(0%);
        top: calc(100% - 10px);
        left: 0;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        position: relative;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 1000;
    &:hover {
        ${Drop} {
            visibility: visible;
            opacity: 1;
            max-height: 200px;
            transform: translateY(0);
        }
    }
    @media (max-width: 850px) {
        background: #4b7376;
    }
`;
const DropOptions = styled(Link)`
    padding: 20px 15px;
    text-decoration: none;
    color: white;
    background: #4b7376;
    z-index: 500;
    border-bottom: 1px solid rgb(61, 100, 102);
    display: block;
`;
const Wrapp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    @media (max-width: 850px) {
        justify-content: start;
    }
`;

export default Dropdown;
