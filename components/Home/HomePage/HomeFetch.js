import styled from "styled-components";
import { GuestReview, GuestReviewSecond } from "../../../data/GuestReview";
import dynamic from "next/dynamic";
const About = dynamic(() => import("../About/About"));
const Strip = dynamic(() => import("../Strip/Strip"));
const RoomEquipment = dynamic(() => import("../RoomEquipment/RoomEquipment"));
const Rooms = dynamic(() => import("../Room/Rooms"));
const Activities = dynamic(() => import("../Activites-Attractions/Activitie-Attraction"));
const Review = dynamic(() => import("../ReviewSlider/Review"));
const AboutUs = dynamic(() => import("../About/AboutUs"));
const Galery = dynamic(() => import("../Galery/Galery"));

function HomeFetch() {
    const AboutDreznica = {
        title: "visit Drežnica",
        titleBold: "Why you should ",
        generalDescription: [
            {
                __html: `If you're <b>drawn to the serene beauty of nature and crave an escape from humdrum routine and daily stress,</b> Drežnica is the place for you.\n\n`,
            },
            {
                __html: `Surrounded by breathtaking mountains with a tranquil emerald river going through and untouched nature stretching as far as the eye can see…\n\n`,
            },
            {
                __html: `Drežnica offers an <b>unforgettable blend of adventure and peace.</b>\n\n`,
            },
            {
                __html: `After visiting Drežnica, <b>you'll be eager to share your exhilarating adventures with friends and family,</b> captivating them with tales of discovering hidden gems in its untouched wilderness.\n\n`,
            },
        ],
        mountainDescription: [
            {
                __html: `You can <b>scale the peaks of mountains Čvrsnica and Čabulja</b> that encircle Drežnica…\n\n`,
            },
            {
                __html: `Čvrsnica commands the skyline to the north, its rugged ridges and majestic cliffs offering a dramatic backdrop to the village…\n\n`,
            },
            {
                __html: `To the south, Čabulja stretches out with its rolling slopes and verdant meadows, gently enfolding Drežnica in a tranquil embrace.\n\n`,
            },
            {
                __html: `Or...\n\n`,
            },
        ],
        riverDescription: [
            {
                __html: `You can take a boat <b>ride, kayak, or swim</b> at the meeting point of two natural wonders...\n\n`,
            },
            {
                __html: `The river Drežanka gracefully converges with the expansive Neretva Lake, creating a harmonious union where flowing waters meet still expanses.\n\n`,
            },
            {
                __html: `Surrounded by lush vegetation and framed by towering mountains, <b>this confluence exudes a sense of peacefulness and serenity.</b>\n\n`,
            },
        ],
        alter: "About Image",
        image: "/General/About.webp",
    };
    const AboutVisitDreznica = {
        title: "Us",
        titleBold: "About ",
        aboutUsDescription: [
            {
                __html: `Surrounded by lush vegetation and framed by towering mountains, <b>this confluence exudes a sense of peacefulness and serenity.</b>\n\n`,
            },
        ],
        alter: "About Image",
        image: "/General/AboutVisitDreznica.webp",
    };
    return (
        <Container>
            <About content={AboutDreznica} />
            <Strip guestInfo={GuestReview} />
            <RoomEquipment />
            <Rooms />
            <Activities />
            <Review guestInfo={GuestReviewSecond} />
            <AboutUs content={AboutVisitDreznica} />
            <Galery />
        </Container>
    );
}

export default HomeFetch;

const Container = styled.div`
    overflow: hidden;
`;
