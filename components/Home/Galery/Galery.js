import styled from "styled-components";
import { GaleryImage as RawGaleryImage } from "../../../data/GaleryImages";
import GalerySlider from "./GalerySlider"
import { useMemo } from "react";

function Galery() {
    const GaleryImage = useMemo(() => RawGaleryImage, []);
    return (
        <Wrap>
            <TitleHolder>
                <span>Gallery:</span>
            </TitleHolder>
                <GalerySlider images={RawGaleryImage} />
        </Wrap>
    );
}

export default Galery;

const Wrap = styled.div`
    width: 100%;
    background-color: #f8f5df;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 36px 0 48px 0;
    color: #525252;
    overflow: hidden;
    @media (max-width: 380px) {
        padding: 36px 0 60px 0;
    }
`;
const TitleHolder = styled.div`
    margin: 0 0 16px 0;
    width: 80%;
    span {
        font-size: 28px;
        font-weight: bold;
    }
`;
