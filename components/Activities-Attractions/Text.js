import styled from "styled-components";
import PropTypes from "prop-types";
function Text({ name, des, link }) {
    Text.propTypes = {
        name: PropTypes.string.isRequired,
        des: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    };
    return (
        <TextHolder>
            <h1 id={link}>{name}</h1>
            <p>{des}</p>
        </TextHolder>
    );
}

export default Text;
const TextHolder = styled.div`
    margin: 24px;
    width: 60%;
    scroll-behavior: smooth;
    h1 {
        padding: 12px 0 16px 0;
        scroll-margin-top: 140px;
        @media (max-width: 701px) {
            scroll-margin-top: 200px;
        }
        @media (max-width: 355px) {
            scroll-margin-top: 290px;
        }
    }
    @media (max-width: 700px) {
        width: 100%;
        margin: 0 0 24px 0;
    }
`;
