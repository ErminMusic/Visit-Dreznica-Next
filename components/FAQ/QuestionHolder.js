import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function QuestionHolder({ title, questions }) {
    const [isAnswerVisible, setIsAnswerVisible] = useState({});
    const toggleAnswerVisibility = (questionIndex) => {
        setIsAnswerVisible((prevState) => ({
            ...prevState,
            [questionIndex]: !prevState[questionIndex],
        }));
    };
    QuestionHolder.propTypes = {
        title: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(
            PropTypes.shape({
                question: PropTypes.string.isRequired,
                answer: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

    return (
        <Container id={title}>
            <Category>
                <h2>{title}:</h2>
            </Category>

            {questions.map((question, index) => (
                <Question
                    key={index}
                    onClick={() => toggleAnswerVisibility(index)}
                >
                    <div>
                        <span>{question.question}</span>
                        <CustomArrow />
                    </div>
                    <Answer visible={isAnswerVisible[index]}>
                        <p>{question.answer}</p>
                    </Answer>
                </Question>
            ))}
        </Container>
    );
}

export default QuestionHolder;

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    color: #525252;
    background: #f8f5df;
    scroll-margin-top: 140px;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 1030px) {
        scroll-margin-top: 200px;
    }
    @media (max-width: 540px) {
        scroll-margin-top: 230px;
    }
`;

const Category = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 50px;
    margin: 16px 0 18px 0;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20%;
        height: 4px;
        background-color: #525252;

        @media (max-width: 950px) {
            width: 175px;
        }
    }
`;

const Question = styled.div`
    background: #f3ecac;
    font-weight: bold;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        span {
            font-size: 20px;
        }
    }
    cursor: pointer;
`;

const CustomArrow = styled(KeyboardArrowDownIcon)`
    &.MuiSvgIcon-root {
        font-size: 36px;
    }
`;

const Answer = styled.div`
    font-weight: normal;
    margin-top: 12px;
    max-height: ${(props) => (props.visible ? "200px" : "0")};
    overflow: hidden;
    transition: max-height 300ms ease;
`;
