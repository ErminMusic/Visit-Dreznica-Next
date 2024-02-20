import Link from "next/link";
import styled from "styled-components";

function BookButton() {
    return (
        <Button href="https://www.booking.com/Share-QnkAAF">Booking.com</Button>
    );
}

export default BookButton;

const Button = styled(Link)`
    text-decoration: none;
    border-radius: 10px;
    color: white;
    background-color: #003b95;
    text-align: center;
    max-width: 30%;
    min-width: 200px;
    padding: 16px 0px;
    cursor: pointer;
    opacity: 0.9;
    font-weight: bold;
    font-size: 18px;
    &:hover {
        transition: 250ms;
        opacity: 1;
        background-color: white;
        color: #003b95;
    }
`;
