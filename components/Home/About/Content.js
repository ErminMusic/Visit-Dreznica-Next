import styled from "styled-components";
import PropTypes from "prop-types";

function Content({ content, title, titleBold }) {
    Content.propTypes = {
        title: PropTypes.string.isRequired,
        titleBold: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                __html: PropTypes.string.isRequired,
            }),
            PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ),
        ]).isRequired,
    };
    const renderContent = () => {
        if (Array.isArray(content)) {
            return content.map((item, index) => {
                if (typeof item === "object" && item.__html) {
                    return <p key={index} dangerouslySetInnerHTML={item} />;
                } else if (typeof item === "string") {
                    return <p key={index}>{item}</p>;
                } else {
                    console.error(
                        `Invalid content item at index ${index}:`,
                        item
                    );
                    return null;
                }
            });
        } else if (typeof content === "object" && content.__html) {
            return <p dangerouslySetInnerHTML={content} />;
        } else if (typeof content === "string") {
            return content
                .split("\n")
                .map((paragraph, index) => <p key={index}>{paragraph}</p>);
        } else {
            console.error("Invalid content type:", content);
            return null;
        }
    };
    return (
        <ContentHolder>
            {(title || titleBold) && (
                <h2>
                    {title}
                    {titleBold && <span>{titleBold}</span>}
                </h2>
            )}
            {renderContent()}
        </ContentHolder>
    );
}

export default Content;

const ContentHolder = styled.div`
    width: 45%;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        font-size: 28px;
        font-weight: normal;
        span {
            font-weight: bold;
        }
    }
    @media (max-width: 1100px) {
        width: 50%;
    }
    @media (max-width: 700px) {
        width: 90%;
        padding: 0 0 24px 0;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
    p {
        margin: 16px 0 0 0;
    }
`;
