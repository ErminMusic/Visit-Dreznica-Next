import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";

function FooterContent({ title, links }) {
    FooterContent.propTypes = {
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
            })
        ).isRequired,
    };
    return (
        <Container>
            <Title>{title}</Title>
            {links.map((item, index) => (
                <Links key={index}>
                    <CustomLink href={item.link}>
                        <span>{item.name}</span>
                    </CustomLink>
                </Links>
            ))}
        </Container>
    );
}

export default FooterContent;

const Container = styled.div`
    padding: 12px 0;
`;
const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 4px 0;
`;
const Links = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    @media (max-width: 850px) {
        width: 100%;
    }
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 10px 0;
    font-size: 16px;
    span {
        letter-spacing: 1.5px;
        position: relative;
        &::after {
            content: "";
            height: 2.5px;
            background: #fff;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -4px;
            opacity: 0;
            transform: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
`;
