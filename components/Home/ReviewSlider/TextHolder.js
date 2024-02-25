import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextHolder = ({ date, title, description, disliked }) => {
    const [isOpen, setIsOpen] = useState(false);
    TextHolder.propTypes = {
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        disliked: PropTypes.string.isRequired,
    };
    const showDescriptionStyle = {
        WebkitLineClamp: isOpen ? "unset" : 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box",
    };
    const paragraphs = description
        .split("\n")
        .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    const dislike = disliked
        .split("\n")
        .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    return (
        <TextContainer>
            <p>
                Reviewed:
                <br />
                {date}
            </p>
            <span>{title}</span>
            <div style={showDescriptionStyle}>
                <span>Liked:</span>
                {paragraphs}
                <span>Disliked:</span>
                {dislike}
            </div>
            {description.length > 150 && (
                <ReadMoreButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Read Less" : "Read More"}
                </ReadMoreButton>
            )}
        </TextContainer>
    );
};

export default TextHolder;

const TextContainer = styled.div`
    p {
        margin: 8px 0;
    }
    span {
        font-size: 28px;
        font-weight: bold;
        margin: 14px 0;
    }
    div {
        margin: 14px 0;
        span {
            font-size: 18px;
            font-weight: bold;
            padding: 12px 0;
        }
    }
`;
const ReadMoreButton = styled.button`
    background: none;
    border: none;
    color: #525252;
    cursor: pointer;
    font-weight: bold;
    margin: 8px 0;
    padding: 0;
    outline: none;
    font-size: 18px;
`;
