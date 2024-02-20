import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";

function BackgroundHolder({ Bg, BgPhone }) {
    BackgroundHolder.propTypes = {
        Bg: PropTypes.node.isRequired,
        BgPhone: PropTypes.node.isRequired,
    };
    return (
        <>
            <BackgroundImage
                alt="Background"
                src={Bg}
                srcSet={`${BgPhone} 600w, ${Bg} 1920w`}
                sizes="(max-width: 600px) 100vw, 1920px"
                width={1300}
                height={800}
            />
        </>
    );
}

export default BackgroundHolder;

const BackgroundImage = styled(Image)`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
