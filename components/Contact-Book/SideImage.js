import styled from "styled-components";
import Image from "next/image";
import PropTypes from "prop-types";

function SideImage({ side }) {
    SideImage.propTypes = {
        side: PropTypes.node.isRequired,
    };
    return (
        <Container>
            <CustomImage src={side} alt="Side Image" width={600} height={600} />
        </Container>
    );
}

export default SideImage;

const Container = styled.div`
    width: 100%;
    padding: 12px;
`;
const CustomImage = styled(Image)`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    min-height: 480px;
`;
