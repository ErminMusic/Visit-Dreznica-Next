import Image from "next/image";
import styled from "styled-components";

function Background() {
    const HeroBg = "/Background/Hero.webp"
    const HeroBgPhone = "/Background/HeroBgPhone.webp"
    return (
        <>
            <BackgroundOverlay />
            <BackgroundImage
                alt="Hero Image"
                src={HeroBg}
                srcSet={`${HeroBgPhone} 600w, ${HeroBg} 1920w`}
                sizes="(max-width: 600px) 100vw, 1920px"
                width={1100}
                height={800}
                priority="high"
            />
        </>
    );
}

export default Background;

const BackgroundImage = styled(Image)`
    position: absolute;
    left: 1px;
    right: 0px;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
const BackgroundOverlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100vh;
    z-index: 2;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9) 2%,
        rgba(0, 0, 0, 0) 100%
    );
`;
