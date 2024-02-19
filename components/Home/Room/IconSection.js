import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconSection = ({ iconSrc, text }) => {
    IconSection.propTypes = {
        iconSrc: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };
    return (
        <Container>
            <Icon
                loading="lazy"
                alt="Icon"
                src={iconSrc}
                width={50}
                height={50}
            />
            <p>{text}</p>
        </Container>
    );
};

export default IconSection;

const Container = styled.div`
    width: 45%;
    height: 70px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
    p {
        font-size: 12px;
        margin: 0 0 0 8px;
        font-weight: bold;
    }
`;
const Icon = styled(Image)`
    width: 50px;
    height: 50px;
`;
