import styled from "styled-components";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Image from "next/image";

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ cursor: "default", display: "none" }}
            onClick={onClick}
        />
    );
}
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            style={{ cursor: "default", display: "none" }}
            onClick={onClick}
        />
    );
}

function GalerySlider({ images }) {
    GalerySlider.propTypes = {
        images: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.node.isRequired,
                alter: PropTypes.string.isRequired,
            })
        ).isRequired,
    };
    SamplePrevArrow.propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func,
    };
    SampleNextArrow.propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func,
    };
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        swipeToSlide: true,
        slidesToShow: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Container>
            <StyledSlider {...settings}>
                {images.map((image, index) => (
                    <ImageHolder key={index}>
                        <CustomImage
                            loading="lazy"
                            alt={image.alter}
                            src={image.image}
                            width={1000}
                            height={400}
                        />
                    </ImageHolder>
                ))}
            </StyledSlider>
        </Container>
    );
}

export default GalerySlider;

const Container = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1100px) {
        height: 340px;
    }
    @media (max-width: 850px) {
        width: 95%;
        height: 260px;
    }
    @media (max-width: 600px) {
        height: 210px;
    }
`;
const StyledSlider = styled(Slider)`
    width: 100%;
    @media (max-width: 440px) {
        max-height: 210px;
        .slick-dots {
            li {
                bottom: -18px;
            }
        }
    }
    .slick-dots {
        bottom: -35px;
        li {
            margin: 0 5px;
            button {
                font-size: 20px;
                width: 20px;
                height: 20px;
                margin: 0 5px;
                &.slick-active {
                    background-color: #4caf50;
                }
                &:before {
                    font-size: 15px;
                    color: rgb(0, 0, 0);
                }
            }
        }
    }
`;
const ImageHolder = styled.div`
    height: 400px;
    width: auto;
    padding: 0 16px;
    @media (max-width: 1100px) {
        height: 330px;
        width: auto;
    }
    @media (max-width: 850px) {
        height: 250px;
        width: auto;
    }
    @media (max-width: 600px) {
        height: 200px;
        width: auto;
    }
`;
const CustomImage = styled(Image)`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;
