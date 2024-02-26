import styled from "styled-components";
import PropTypes from "prop-types";
import AboutImage from "./AboutImage";
import Content from "./Content";

function About({ content }) {
    About.propTypes = {
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            titleBold: PropTypes.string.isRequired,
            generalDescription: PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
            mountainDescription: PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
            riverDescription: PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
            alter: PropTypes.string.isRequired,
        }).isRequired,
    };
    const generalImage = "/About/About.webp";
    const mountainImage = "/About/TwoMountains.webp";
    const riverImage = "/About/River.webp";
    return (
        <Wrap id="AboutDreznica">
            <Container>
                <AboutImage image={generalImage} alter={content.alter} />
                <Content
                    title={content.title}
                    titleBold={content.titleBold}
                    content={content.generalDescription}
                />
            </Container>
            <FlipContainer>
                <AboutImage image={mountainImage} alter={content.alter} />
                <Content
                    title=""
                    titleBold=""
                    content={content.mountainDescription}
                />
            </FlipContainer>
            <Container>
                <AboutImage image={riverImage} alter={content.alter} />
                <Content
                    title=""
                    titleBold=""
                    content={content.riverDescription}
                />
            </Container>
        </Wrap>
    );
}

export default About;

const Wrap = styled.div`
    background-color: #f0fff0;
    color: #525252;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 36px 0;
`;
const Container = styled.div`
    width: 80%;
    margin: 24px 0;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        align-items: center;
        margin: 12px 0;
    }
`;
const FlipContainer = styled(Container)`
    flex-direction: row-reverse;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export async function getStaticProps() {
    const data = await fetchData();

    return {
        props: {
            content: data,
        },
    };
}