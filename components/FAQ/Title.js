import styled from "styled-components";

function Title() {
    return (
        <Wrap>
            <Container>
                <h1>Frequently Asked Questions</h1>
            </Container>
        </Wrap>
    );
}

export default Title;

const Container = styled.div`
    width: 80%;
    @media (max-width: 850px) {
        width: 95%;
    }
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f0fff0;
    padding: 20px 0;
    border-bottom: 2.5px solid #cbe3cb;
`;
