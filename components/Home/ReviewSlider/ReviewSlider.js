import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Person from "./Person"
import TextHolder from "./TextHolder"

function ReviewSlider({ list }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };
    ReviewSlider.propTypes = {
        list: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                profileImage: PropTypes.node.isRequired,
                countryName: PropTypes.node.isRequired,
                flag: PropTypes.node.isRequired,
                score: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                disliked: PropTypes.string.isRequired,
            })
        ).isRequired,
    };

    return (
        <Carousel {...settings}>
            {list.map((item, index) => (
                <Container key={index}>
                    <Person
                        profileImage={item.profileImage}
                        name={item.name}
                        countryName={item.countryName}
                        flag={item.flag}
                        score={item.score}
                    />
                    <TextHolder
                        date={item.date}
                        title={item.title}
                        description={item.description}
                        disliked={item.disliked}
                    />
                </Container>
            ))}
        </Carousel>
    );
}

export default ReviewSlider;

const Carousel = styled(Slider)`
    width: 80%;
    .element-style {
        display: flex;
    }
    ul li button {
        color: white;

        &:before {
            font-size: 15px;
            color: rgb(0, 0, 0);
        }
    }
    .slick-list {
        overflow: hidden;
    }
    .slick-prev,
    .slick-next {
        top: 50%;
        transform: translateY(-50%);
        scale: 3;
        z-index: 10;
        display: none;
    }
    .slick-prev::before,
    .slick-next::before {
        display: none;
    }
    .slick-next {
        right: -45px;
    }
    .slick-prev {
        left: -45px;
    }
`;
const Container = styled.div`
    display: flex;
    padding: 8px;
`;

export async function getStaticProps() {
    const data = await fetchData(); 
    return {
        props: {
            list: data,
        },
    };
}