"use client";
import styled from "styled-components";
import Title from "./Title";
import QuestionHolder from "./QuestionHolder";
import Navbar from "./Navbar";
import Link from "next/link";

function FAQ() {
    const HouseRules = {
        title: "House Rules",
        questionsAndAnswers: [
            {
                question: "When can I check in?",
                answer: "You can check in from 13:00 to 22:30.",
            },
            {
                question: "When can I check out?",
                answer: "You can check out from 09:30 to 10:00.",
            },
            {
                question: "Are pets allowed?",
                answer: "Pets are not allowed.",
            },
            {
                question: "What is the age restriction?",
                answer: "The minimum age for check-in is 18.",
            },
            {
                question: "What payment method do we accept?",
                answer: "Cash only.",
            },
            {
                question: "Do you have extra beds?",
                answer: "Cots and extra beds are not available at this property.",
            },
            {
                question: "Can we play loud music?",
                answer: "Loud music is not allowed.",
            },
        ],
    };
    const RentABoat = {
        title: "Rent A Boat",
        questionsAndAnswers: [
            {
                question: "Do I need to book a room to rent a boat?",
                answer: "No you don't need to book a room, just send us a message and check for availability.",
            },
            {
                question: "Do you have swimming vests?",
                answer: "We do have swimming vests.",
            },
            {
                question: "How much does it cost to rent a boat?",
                answer: "It costs X€ per 1 hour.",
            },
        ],
    };
    const Location = {
        title: "Location",
        questionsAndAnswers: [
            {
                question: "What is there to do at Visit Drežnica?",
                answer: `Cycling, Hiking, Fishing, Canoeing, Beachfront, Beach, Tour or class about local culture, Water sport facilities on site, Private beach area.`,
            },
            {
                question: "What cities are near Drežnica?",
                answer: "Drežnica is 30 km away from Mostar and 19 km away from Jablanica.",
            },
            {
                question: "What is the closest airport?",
                answer: "Mostar International Airport 35 km and Sarajevo International Airport 93 km",
            },
        ],
    };
    const RentABike = {
        title: "Rent A Bike",
        questionsAndAnswers: [
            {
                question: "",
                answer: "",
            },
        ],
    };
    const Other = {
        title: "Other",
        questionsAndAnswers: [
            {
                question: "",
                answer: "",
            },
        ],
    };
    const Categories = [
        {
            name: "House Rules",
            link: "House Rules",
        },
        {
            name: "Rent A Boat",
            link: "Rent A Boat",
        },
        {
            name: "Rent A Bike",
            link: "Rent A Bike",
        },
        {
            name: "Location",
            link: "Location",
        },
        {
            name: "Other",
            link: "Other",
        },
    ];
    return (
        <Container>
            <Title />
            <Navbar category={Categories} />
            <QuestionHolder
                title={HouseRules.title}
                questions={HouseRules.questionsAndAnswers}
            />
            <QuestionHolder
                title={RentABoat.title}
                questions={RentABoat.questionsAndAnswers}
            />
            <QuestionHolder
                title={Location.title}
                questions={Location.questionsAndAnswers}
            />
            <QuestionHolder
                title={RentABike.title}
                questions={RentABike.questionsAndAnswers}
            />
            <QuestionHolder
                title={Other.title}
                questions={Other.questionsAndAnswers}
            />
            <Contact>
                <span>
                    If you still have questions, click here:{" "}
                    <Link href="/Contact">Contact Us</Link>
                </span>
            </Contact>
        </Container>
    );
}

export default FAQ;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #525252;
    background: #f8f5df;
`;
const Contact = styled.div`
    width: 80%;
    font-weight: bold;
    font-size: 18px;
    padding: 16px 0;
    a {
        text-decoration: none;
        color: #525252;
        text-decoration: underline;
    }
    @media (max-width: 850px) {
        width: 95%;
    }
`;
