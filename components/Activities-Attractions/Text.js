import styled from "styled-components";
import PropTypes from "prop-types";
function Text({ name, des }) {
    Text.propTypes = {
        name: PropTypes.string.isRequired,
        des: PropTypes.string.isRequired,
    };
    return (
        <TextHolder>
            <h1 id={name}>{name}</h1>
            <p>{des}</p>
        </TextHolder>
    );
}

export default Text;
const TextHolder = styled.div`
    margin: 24px;
    width: 60%;
    h1 {
        padding: 12px 0 16px 0;
    }
    @media (max-width: 700px) {
        width: 100%;
        margin: 0 0 24px 0;
    }
`;
