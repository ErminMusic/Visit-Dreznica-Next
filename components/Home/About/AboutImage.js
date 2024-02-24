import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";

function AboutImage({ image, alter }) {
    AboutImage.propTypes = {
        alter: PropTypes.string.isRequired,
        image: PropTypes.node.isRequired,
    };
    return (
        <ImageHolder>
            <CustomImage loading="lazy" alt={alter} src={image} width={530} height={630} />
        </ImageHolder>
    );
}

export default AboutImage;

const ImageHolder = styled.div`
    display: flex;
    justify-content: center;
    width: 35%;
    @media (max-width: 1100px) {
        width: 50%;
        padding: 4px;
    }
    @media (max-width: 700px) {
        width: 90%;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`;
const CustomImage = styled(Image)`
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
