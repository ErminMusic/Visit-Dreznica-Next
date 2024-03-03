import React from "react";
import styled from "styled-components";

function Credits() {
    return (
        <Wrap>
            <Container>
                <Rights>Copyright © 2024 Visit Drežnica</Rights>
                <Credit>Copy & Design by Ermin Mushic</Credit>
            </Container>
        </Wrap>
    );
}

export default Credits;

const Wrap = styled.div`
    width: 100%;
    display: flex;
    background: #42696B;
    justify-content: center;
    padding: 18px 0;
    margin-top: 8px;
`;

const Container = styled.div`
    width: 80%;
    display: flex;
    @media (max-width: 850px) {
        width: 95%;
        flex-direction: column;
    }
`;

const Rights = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    @media (max-width: 850px) {
        width: 100%;
        justify-content: start;
    }
`;

const Credit = styled(Rights)`
    justify-content: end;
    align-items: center;
    @media (max-width: 850px) {
        padding-top: 20px;
        justify-content: start;
    }
`;
