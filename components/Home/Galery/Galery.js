import styled from "styled-components";
import { GaleryImage } from "../../../data/GaleryImages";
import GalerySlider from "./GalerySlider"

function Galery() {
    return (
        <Wrap>
            <TitleHolder>
                <h2>Gallery:</h2>
            </TitleHolder>
                <GalerySlider images={GaleryImage} />
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
// const Title = styled.h2``;
const TitleHolder = styled.div`
    margin: 0 0 16px 0;
    width: 80%;
    h2 {
        font-size: 28px;
    }
`;
