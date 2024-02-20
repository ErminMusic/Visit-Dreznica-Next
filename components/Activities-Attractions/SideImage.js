import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
function SideImage({ img, alt }) {
    SideImage.propTypes = {
        img: PropTypes.node.isRequired,
        alt: PropTypes.string.isRequired,
    };
    return (
        <ImageHolder>
            <CustomImage src={img} alt={alt} width={900} height={900} />
        </ImageHolder>
    );
}

export default SideImage;

const ImageHolder = styled.div`
    width: 35%;
    min-width: 300px;
    min-height: 300px;
    padding: 8px;

    @media (max-width: 850px) {
        min-width: 250px;
        min-height: 250px;
    }
    @media (max-width: 300px) {
        min-width: 200px;
        min-height: 200px;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: 100%;
        padding: 0;
    }
`;

const CustomImage = styled(Image)`
    width: 100%;
    height: 100%;
`;
