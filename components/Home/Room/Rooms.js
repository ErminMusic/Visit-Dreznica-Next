import styled from "styled-components";
import { RoomDetails } from "../../../data/RoomDetails";
import Room from "./Room"

function Rooms() {
    const mainTitle = "Choose a Room:";
    return (
        <Wrap id="Rooms">
            <Container>
                <TitleHolder>
                    <Title>{mainTitle}</Title>
                </TitleHolder>
                <ContentHolder>
                        <Room roomContent={RoomDetails} />
                </ContentHolder>
            </Container>
        </Wrap>
    );
}

export default Rooms;

const Wrap = styled.div`
    background-color: #f8f5df;
    width: 100%;
    color: #525252;
    padding: 36px 0 0px 0;
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const TitleHolder = styled.div`
    width: 80%;
    padding: 0 0 12px 1%;
    display: flex;
    justify-content: start;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        padding: 0 0 12px 2%;
    }
`;
const Title = styled.h2`
    font-size: 28px;
`;
const ContentHolder = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;
