import styled from "styled-components";
import HeaderLogo from "../Heder/HeaderLogo";
import FooterContent from "./FooterContent";
import FooterContact from "./FooterContact";

function FooterLinks() {
    const about = {
        title: "About Us",
        links: [
            {
                name: "About Drežnica",
                link: "#About Drežnica",
            },
            {
                name: "About Us",
                link: "#About Us",
            },
        ],
    };
    const howToBook = {
        title: "How To Book",
        links: [
            {
                name: "How To Book",
                link: "/HowToBook",
            },
            {
                name: "Contact Us",
                link: "/Contact",
            },
            {
                name: "FAQ",
                link: "/FAQ",
            },
        ],
    };
    const activitie = {
        title: "Activities",
        links: [
            {
                name: "Activities",
                link: "/Activities",
            },
            {
                name: "Nearby Attractions",
                link: "/Attractions",
            },
        ],
    };

    return (
        <Container>
            <LogoHolder>
                <HeaderLogo />
            </LogoHolder>
            <ContentHolder>
                <FooterContent title={about.title} links={about.links} />
                <FooterContent
                    title={howToBook.title}
                    links={howToBook.links}
                />
                <FooterContent
                    title={activitie.title}
                    links={activitie.links}
                />
                <FooterContact />
            </ContentHolder>
        </Container>
    );
}

export default FooterLinks;

const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 750px) {
        width: 100%;
    }
`;
const ContentHolder = styled.div`
    width: 100%;
    padding: 8px 0 0 0;
`;
const LogoHolder = styled.div`
    max-width: 210px;
`;
