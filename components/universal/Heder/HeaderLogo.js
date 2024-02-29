import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

function HeaderLogo() {
    const logo = "/Icons/Logo.webp"
    return (
        <>
            <CustomLink href="/">
                <Logo>
                    <LogoImage alt="Logo" src={logo} width={100} height={100} loading="lazy" />
                    <span>
                        VISIT  <br />
                        DREŽNICA
                    </span>
                </Logo>
            </CustomLink>
        </>
    );
}

export default HeaderLogo;

const CustomLink = styled(Link)`
    text-decoration: none;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        font-size: 24px;
        color: white;
        font-weight: bold;
        padding: 0 10px;
    }
`;
const LogoImage = styled(Image)`
    width: 100%;
    height: 100%;
    max-width: 70px;
`;
