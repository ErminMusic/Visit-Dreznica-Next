import Link from "next/link";
import styled from "styled-components";

function RoomButton() {
    return (
        <ButtonHolder>
            <BookButton href="/How To Book">
                <span>BOOK</span> THIS ROOM
            </BookButton>
        </ButtonHolder>
    );
}

export default RoomButton;

const ButtonHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const BookButton = styled(Link)`
    text-decoration: none;
    width: 100%;
    position: relative;
    text-align: center;
    padding: 16px 0;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    background-color: #507d7f;
    z-index: 50;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50%;
        height: 100%;
        z-index: 0;
        opacity: 0;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }
    span {
        font-weight: bold;
    }
    &:hover {
        transition: 250ms;
        background-color: white;
        color: #507d7f;
    }
`;
