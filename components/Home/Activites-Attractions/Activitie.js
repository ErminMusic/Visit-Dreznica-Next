import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";

function Activitie({ list }) {
    Activitie.propTypes = {
        list: PropTypes.arrayOf(
            PropTypes.shape({
                alter: PropTypes.string.isRequired,
                image: PropTypes.node.isRequired,
                name: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
                linkTo: PropTypes.string.isRequired,
            })
        ).isRequired,
    };
    return (
        <>
            {list.map((item, index) => (
                <Container key={index}>
                    <CustomImage
                        alt={item.alter}
                        src={item.image}
                        loading="lazy"
                        width={900}
                        height={900}
                    />
                    <ContentHolder>
                        <h2>{item.name}</h2>
                    </ContentHolder>
                    <Button href={`${item.link + item.linkTo}`}>
                        <span>{item.name}</span>
                        LEARN MORE
                    </Button>
                </Container>
            ))}
        </>
    );
}

export default Activitie;

const Container = styled.div`
    width: 48%;
    color: #525252;
    margin: 12px 0 36px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
        width: 100%;
    }
`;
const CustomImage = styled(Image)`
    width: 80%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
    @media (max-width: 1100px) {
        width: 85%;
        height: 85%;
    }
    @media (max-width: 900px) {
        width: 90%;
        height: 90%;
    }
    @media (max-width: 700px) {
        width: 90%;
        height: 90%;
    }
`;
const ContentHolder = styled.div`
    margin: 12px 0;
    max-width: 90%;

    h2 {
        font-size: 23px;
    }
`;
const Button = styled.a`
    text-decoration: none;
    border-radius: 10px;
    background-color: rgb(80, 125, 127);
    text-align: center;
    width: 80%;
    max-height: 52px;
    padding: 16px 0px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    &:hover {
        transform: scale(1.05);
        transition: 250ms;
    }
    @media (max-width: 1100px) {
        width: 85%;
        height: 85%;
    }
    @media (max-width: 900px) {
        width: 90%;
        height: 90%;
    }
    &[aria-label] {
        position: relative;
    }
    span {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
`;

export async function getStaticProps() {
    const data = await fetchData(); 
    return {
        props: {
            list: data,
        },
    };
}