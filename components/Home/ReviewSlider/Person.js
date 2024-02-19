import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";

const Person = ({ profileImage, name, countryName, flag, score }) => {
    Person.propTypes = {
        profileImage: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        countryName: PropTypes.node.isRequired,
        flag: PropTypes.node.isRequired,
        score: PropTypes.string.isRequired,
    };
    return (
        <Container>
            <PersonHolder>
                <IconHolder>
                    <CustomImage loading="lazy" alt={name} src={profileImage} width={50} height={50} />
                </IconHolder>
                <PersonInfo>
                    <span>{name}</span>
                    <div>
                        <FlagImage loading="lazy" src={flag} alt={countryName} width={50} height={50} />
                        {countryName}
                    </div>
                </PersonInfo>
            </PersonHolder>
            <Score>
                <p>{score}</p>
            </Score>
        </Container>
    );
};

export default Person;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`;
const PersonHolder = styled.div`
    display: flex;
`;
const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin: 0 12px 0 0;
    span {
        font-weight: bold;
    }
`;
const CustomImage = styled(Image)`
    border-radius: 50%;
    height: 50px;
    width: 50px;
`;
const PersonInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
        font-weight: bold;
    }
    div {
        display: flex;
        margin: 8px 0;
    }
`;

const FlagImage = styled(Image)`
    width: 20px;
    height: 20px;
    margin: 1.5px 6px 0 0;
`;
const Score = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 10px 10px 10px 0;
    background-color: #003b95;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: white;
    font-weight: bold;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50%;
        height: 100%;
        z-index: 0;
        opacity: 0;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }
`;
