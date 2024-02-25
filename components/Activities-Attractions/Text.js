import styled from "styled-components";
import PropTypes from "prop-types";
function Text({ name, des, link, note, noteDes }) {
    Text.propTypes = {
        name: PropTypes.string.isRequired,
        des: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
        noteDes: PropTypes.string.isRequired,
    };
    return (
        <TextHolder>
            <h1 id={link}>{name}</h1>
            <p>{des}</p>

            {(note || noteDes) && (
                <Note>
                    <p>
                        <span>{note}: </span>
                        {noteDes}
                    </p>
                </Note>
            )}
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
        scroll-margin-top: 160px;
        @media (max-width: 701px) {
            scroll-margin-top: 220px;
        }
        @media (max-width: 355px) {
            scroll-margin-top: 310px;
        }
    }
    @media (max-width: 700px) {
        width: 100%;
        margin: 0 0 24px 0;
    }
`;

const Note = styled.div`
    margin: 16px 0;
    span {
        font-weight: bold;
    }
`;
