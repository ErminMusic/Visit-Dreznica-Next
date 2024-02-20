import styled from "styled-components";
import Body from "./Body";
import Title from "./Title";
import Navbar from "../FAQ/QuestionNavbar";
import { AttractionDetailList } from "../../data/ActivitiesDetail";

function Attractions() {
    const activityNames = AttractionDetailList.map((activity) => activity.name);
    return (
        <Container>
            <Title title="Nearby Attractions" />
            <Navbar category={activityNames} />
            <Body content={AttractionDetailList} />
        </Container>
    );
}

export default Attractions;

const Container = styled.div`
    background-color: #f0fff0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #525252;
`;
