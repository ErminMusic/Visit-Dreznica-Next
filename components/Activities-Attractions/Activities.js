import styled from "styled-components";
import Body from "./Body";
import Title from "./Title";
import Navbar from "../FAQ/QuestionNavbar";
import { ActivitiesDetailList } from "../../data/ActivitiesDetail";

const Activities = () => {
    const activityNames = ActivitiesDetailList.map((activity) => activity.name);
    return (
        <Container>
            <Title title="Activities" />
            <Navbar category={activityNames} />
            <Body content={ActivitiesDetailList} />
        </Container>
    );
};

export default Activities;

const Container = styled.div`
    background-color: #f0fff0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #525252;
`;
