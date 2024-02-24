import styled from "styled-components";
import PropTypes from "prop-types";
import AboutImage from "./AboutImage";
import Content from "./Content";

function AboutUs({ content }) {
    AboutUs.propTypes = {
        content: PropTypes.shape({
            title: PropTypes.string,
            titleBold: PropTypes.string,
            aboutUsDescription: PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
            alter: PropTypes.string.isRequired,
        }).isRequired,
    };
    const AboutUsImage = "/About/AboutUs.webp";
    return (
        <Wrap id="AboutUs">
            <Container>
                <AboutImage image={AboutUsImage} alter={content.alter} />
                <Content
                    title={content.title}
                    titleBold={content.titleBold}
                    content={content.aboutUsDescription}
                />
            </Container>
        </Wrap>
    );
}

export default AboutUs;

const Wrap = styled.div`
    background-color: #f0fff0;
    color: #525252;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 36px 0;
`;
const Container = styled.div`
    width: 80%;
    margin: 8px 0;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;
