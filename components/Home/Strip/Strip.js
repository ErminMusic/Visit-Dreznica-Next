import styled from "styled-components";
import StripIcons from "./StripIcons.js";
import Review from "../ReviewSlider/Review"
import PropTypes from "prop-types";
function Strip({ guestInfo }) {
    Strip.propTypes = {
        guestInfo: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                profileImage: PropTypes.node.isRequired,
                countryName: PropTypes.node.isRequired,
                flag: PropTypes.node.isRequired,
                score: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                disliked: PropTypes.string.isRequired,
            })
        ).isRequired,
    };
    return (
        <Wrap>
            <Container>
                <StripIcons />
            </Container>
            <Review guestInfo={guestInfo} />
        </Wrap>
    );
}
export default Strip;

const Wrap = styled.div`
    width: 100%;
    background-color: #f8f5df;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 36px 0 0 0;
`;
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 16px 0;
    padding: 6px 0;
    border-bottom: 2.5px solid #f7f0b6;
    @media (max-width: 850px) {
        width: 100%;
    }
`;
