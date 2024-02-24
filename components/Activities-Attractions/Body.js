import PropTypes from "prop-types";
import styled from "styled-components";
import SideImage from "./SideImage";
import Text from "./Text";

function Body({ content }) {
    return (
        <>
            {content.map((item, index) => (
                <Container key={index} $isReversed={!item.side}>
                    <Content $isReversed={!item.side}>
                        <SideImage img={item.image} alt={item.alter} />
                        <Text
                            link={item.link}
                            name={item.name}
                            des={item.description}
                        />
                    </Content>
                </Container>
            ))}
        </>
    );
}

Body.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            alter: PropTypes.string.isRequired,
            side: PropTypes.bool.isRequired,
            description: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Body;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ $isReversed }) =>
        $isReversed ? "#f8f5df" : "#f0fff0"};
`;

const Content = styled.div`
    width: 80%;
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ $isReversed }) =>
        $isReversed ? "row-reverse" : "row"};
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }
`;
