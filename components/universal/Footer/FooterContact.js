import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";

function FooterContact() {
    const contact = {
        title: "Contact Us",
        phone: "+387 616 281 58",
        email: "visitdreznica@gmail.com",
        social: "Visit Drežnica",
        igLink: "https://www.instagram.com/visitdreznica/",
        fbLink: "https://www.facebook.com/visitdreznica",
    };
    const handleCopyToClipboard = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert(`Copied to clipboard: ${text}`);
            })
            .catch((error) => {
                console.error("Could not copy text: ", error);
            });
    };
    return (
        <Container>
            <Title>{contact.title}</Title>
            <Links>
                <LinkHolder>
                    <Link href={`${contact.igLink}`}>
                        <div>
                            <CustomIG />
                            Instagram
                        </div>
                    </Link>
                </LinkHolder>
                <LinkHolder>
                    <Link href={`${contact.fbLink}`}>
                        <div>
                            <CustomFB />
                            Facebook
                        </div>
                    </Link>
                </LinkHolder>
                <LinkHolder>
                    <div onClick={() => handleCopyToClipboard(contact.phone)}>
                        <CustomPhone />
                        {contact.phone}
                    </div>
                </LinkHolder>
                <LinkHolder>
                    <div onClick={() => handleCopyToClipboard(contact.email)}>
                        <CustomMail />
                        {contact.email}
                    </div>
                </LinkHolder>
            </Links>
        </Container>
    );
}

export default FooterContact;

const Container = styled.div`
    padding: 12px 0;
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 4px 0;
`;
const Links = styled.div`
    display: flex;
    flex-direction: column;
`;
const LinkHolder = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    a,
    div {
        cursor: pointer;
        text-decoration: none;
        color: white;
        text-align: center;
        letter-spacing: 1.5px;
        font-size: 16px;
        display: flex;
        align-items: center;
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
        div:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
`;

const CustomIG = styled(InstagramIcon)`
    &.MuiSvgIcon-root {
        margin-right: 4px;
        font-size: 28px;
    }
`;
const CustomFB = styled(FacebookIcon)`
    &.MuiSvgIcon-root {
        margin-right: 4px;
        font-size: 28px;
    }
`;
const CustomMail = styled(EmailIcon)`
    &.MuiSvgIcon-root {
        margin-right: 4px;
        font-size: 28px;
    }
`;
const CustomPhone = styled(PhoneIcon)`
    &.MuiSvgIcon-root {
        margin-right: 4px;
        font-size: 28px;
    }
`;
