import styled from "styled-components";

function Icons() {
    const content = [
        {
            icon: "/Icons/Award.webp",
            alter: "Award Icon",
            text: "Booking.com Traveller Review Awards 2022",
        },
        {
            icon: "/Icons/Score.webp",
            alter: "Score Icon",
            text: "Score on Booking.com",
        },
        {
            icon: "/Icons/Affordable.webp",
            alter: "AffordableIcon",
            text: "Affordable for all budgets",
        },
    ];

    return (
        <Wrapper>
            {content.map((item, index) => (
                <Holder key={index}>
                    <IconHolder
                        loading="lazy"
                        alt={item.alter}
                        src={item.icon}
                    />
                    <TextHolder>
                        <p>{item.text}</p>
                    </TextHolder>
                </Holder>
            ))}
        </Wrapper>
    );
}

export default Icons;

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    @media (max-width: 520px) {
        margin: 20px;
        width: 35%;
    }
    @media (max-width: 350px) {
        width: 140px;
        height: 140px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    width: 100%;
    @media (max-width: 700px) {
        justify-content: space-around;
    }
    @media (max-width: 520px) {
        flex-direction: column;
        align-items: center;
    }
`;
const IconHolder = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 10px 10px 10px 0;
    margin: 0 0 12px 0;
    @media (max-width: 520px) {
        width: 100px;
        height: 100px;
    }
`;
const TextHolder = styled.div`
    width: 100%;
    color: #525252;
    font-weight: bold;
    text-align: center;
    @media (max-width: 520px) {
        font-size: 18px;
    }
`;
