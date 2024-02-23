import styled from "styled-components";

function Buttons() {
    const buttonContent = {
        buttonOne: "BOOK A ",
        buttonOneSpan: "ROOM",
        buttonTwo: "US",
        buttonTwoSpan: "CONTACT",
    };

    return (
        <ButtonHolder>
            <CustomLink href="#Rooms">
                {buttonContent.buttonOne} <span>{buttonContent.buttonOneSpan}</span>
            </CustomLink>

            <ContactLink href="/Contact">
                <span>{buttonContent.buttonTwoSpan}</span> {buttonContent.buttonTwo}
            </ContactLink>
        </ButtonHolder>
    );
}

export default Buttons;

const ButtonHolder = styled.div`
    display: flex;
    flex-direction: column;
`;
const CustomLink = styled.a`
    text-decoration: none;
    border-radius: 10px;
    color: white;
    background-color: rgb(80, 125, 127);
    text-align: center;
    width: 50%;
    padding: 16px 0px;
    cursor: pointer;
    opacity: 0.9;
    span {
        font-weight: bold;
    }
    &:hover {
        transition: 250ms;
        opacity: 1;
        background-color: white;
        color: rgb(80, 125, 127);
    }
    @media (max-width: 500px) {
        width: 55%;
    }
    @media (max-width: 420px) {
        width: 65%;
    }
`;

const ContactLink = styled(CustomLink)`
    background-color: #8fbc8f;
    margin-top: 20px;
    &:hover {
        background-color: white;
        color: #8fbc8f;
    }
    span {
        font-weight: bold;
    }
`;
