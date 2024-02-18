import styled from "styled-components";

function TextHolder() {
    return (
        <Container>
            <h1>
                Visit <span>Drežnica</span>
            </h1>
            <h2>
                A Hidden Gem in <br /> Bosnia & Herzegovina
            </h2>
        </Container>
    );
}

export default TextHolder;

const Container = styled.div`
    max-height: fit-content;
    width: 100%;
    h1 {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 56px;
        span {
            color: #f0fff0;
        }
    }
    h2 {
        font-size: 32px;
        margin: 16px 0 20px 0;
        font-weight: normal;
    }
`;
