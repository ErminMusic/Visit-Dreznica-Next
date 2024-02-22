import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";

function EquipmentIcons({ title, content }) {
    EquipmentIcons.propTypes = {
        title: PropTypes.shape({
            normal: PropTypes.string.isRequired,
            bold: PropTypes.string.isRequired,
        }).isRequired,

        content: PropTypes.arrayOf(
            PropTypes.shape({
                alter: PropTypes.string.isRequired,
                icon: PropTypes.node.isRequired,
                text: PropTypes.string.isRequired,
            })
        ),
    };
    return (
        <>
            <TitleHolder>
                <span>{title.bold}</span>
                {title.normal}
            </TitleHolder>
            <IconWrap>
                {content.map((item, index) => (
                    <IconHolder key={index}>
                        <Icon
                            alt={item.alter}
                            loading="lazy"
                            src={item.icon}
                            srcSet={`${item.icon} 300w, ${item.icon} 768w, ${item.icon} 1280w`}
                            sizes="(max-width: 300px) 100vw, (max-width: 768px) 80vw, 50vw"
                            width={100}
                            height={100}
                        />
                        <Text>{item.text}</Text>
                    </IconHolder>
                ))}
            </IconWrap>
        </>
    );
}

export default EquipmentIcons;

const TitleHolder = styled.div`
    width: 100%;
    margin: 18px 0 14px 0;
    font-size: 28px;
    span {
        font-weight: bold;
    }

    @media (max-width: 850px) {
        width: 95%;
    }
`;
const IconWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;
const IconHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: auto;
    padding: 16px 8px;
    word-wrap: break-word;
    text-align: center;
    @media (max-width: 650px) {
        width: 33%;
    }
    @media (max-width: 500px) {
        width: 50%;
    }
`;
const Icon = styled(Image)`
    width: 80px;
    height: 80px;
`;
const Text = styled.div`
    font-weight: bold;
    padding: 12px 0 0 0;
`;
