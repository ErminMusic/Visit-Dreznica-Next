import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";

function IconHolder() {
    const contacts = {
        IG: "https://www.instagram.com/visitdreznica/",
        FB: "https://www.facebook.com/visitdreznica",
        Phone: "+387 616 281 58",
        email: "visitdreznica@gmail.com",
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
        <div>
            <LinkHolder href={contacts.IG}>
                <div>
                    <CustomIG /> Instagram
                </div>
            </LinkHolder>
            <LinkHolder href={contacts.FB}>
                <div>
                    <CustomFB /> Facebook
                </div>
            </LinkHolder>
            <InfoHolder onClick={() => handleCopyToClipboard(contacts.Phone)}>
                <div>
                    <CustomPhone />
                    {contacts.Phone}
                </div>
            </InfoHolder>
            <InfoHolder onClick={() => handleCopyToClipboard(contacts.email)}>
                <div>
                    <CustomMail />
                    {contacts.email}
                </div>
            </InfoHolder>
        </div>
    );
}

export default IconHolder;

const LinkHolder = styled(Link)`
    display: flex;
    align-items: center;
    padding: 10px 0;
    text-decoration: none;
    color: white;
    text-align: center;
    letter-spacing: 1.5px;
    font-size: 16px;
    position: relative;
    div {
        cursor: pointer;
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
        &:hover::after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
`;
const InfoHolder = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    text-decoration: none;
    color: white;
    text-align: center;
    letter-spacing: 1.5px;
    font-size: 16px;
    position: relative;
    div {
        cursor: pointer;
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
        &:hover::after {
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
