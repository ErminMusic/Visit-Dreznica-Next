import styled from "styled-components";
import PropTypes from "prop-types";
import BackgroundHolder from "./BackgroundHolder";
import SideImage from "./SideImage";
import BookButton from "./BookButton";
import IconHolder from "./IconHolder";

function Body({ content }) {
    Body.propTypes = {
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            showButton: PropTypes.bool.isRequired,
            showSecondText: PropTypes.bool.isRequired,
            secondText: PropTypes.string.isRequired,
            backgroundImg: PropTypes.node.isRequired,
            backgroundImgPhone: PropTypes.node.isRequired,
            sideImg: PropTypes.node.isRequired,
        }).isRequired,
    };
    return (
        <Container>
            <BackgroundHolder Bg={content.backgroundImg} Bgphone={content.backgroundImgPhone} />
            <ContentHolder>
                <ImageHolder>
                    <SideImage side={content.sideImg} />
                </ImageHolder>
                <Content>
                    <h1>{content.title}</h1>
                    <p>{content.text}</p>
                    {content.showButton ? <BookButton /> : null}
                    {content.showSecondText ? (
                        <p>{content.secondText}</p>
                    ) : null}
                    <IconHolder />
                </Content>
            </ContentHolder>
        </Container>
    );
}

export default Body;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
    color: white;
    padding: 28px 0;
`;
const ContentHolder = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    z-index: 20;
    @media (max-width: 850px) {
        width: 95%;
    }
`;
const ImageHolder = styled.div`
    width: 50%;
    @media (max-width: 650px) {
        display: none;
    }
`;
const Content = styled.div`
    width: 50%;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    p {
        font-weight: bold;
    }
    @media (max-width: 650px) {
        width: 100%;
    }
`;
