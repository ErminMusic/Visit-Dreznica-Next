import { useMemo } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { GuestReview as RawGuestReview, GuestReviewSecond as RawGuestReviewSecond } from "../../../data/GuestReview";
const About = dynamic(() => import("../About/About"));
const Strip = dynamic(() => import("../Strip/Strip"));
const RoomEquipment = dynamic(() => import("../RoomEquipment/RoomEquipment"));
const Rooms = dynamic(() => import("../Room/Rooms"));
const Activities = dynamic(() =>import("../Activites-Attractions/Activitie-Attraction"));
const Review = dynamic(() => import("../ReviewSlider/Review"));
const AboutUs = dynamic(() => import("../About/AboutUs"));
const Galery = dynamic(() => import("../Galery/Galery"));

function HomeFetch() {
    const GuestReview = useMemo(() => RawGuestReview, []);
    const GuestReviewSecond = useMemo(() => RawGuestReviewSecond, []);
    const AboutDreznica = {
        title: "Explore Drežnica: ",
        titleBold: "Where Adventure Meets Tranquility",
        generalDescription: [
            {
                __html: `If you're <b>drawn to the serene beauty of nature</b> and <b>crave an escape from humdrum routine and daily stress</b>, Drežnica is the place for you.\n\n`,
            },
            {
                __html: `Surrounded by breathtaking mountains with a tranquil emerald river going through and untouched nature stretching as far as the eye can see…\n\n`,
            },
            {
                __html: `Drežnica offers a <b>genuine connection with nature and a tranquil serenity</b> that you can only discover off the beaten path.\n\n`,
            },
            {
                __html: `After visiting Drežnica, you'll be <b>eager to share your exciting adventures with friends and family,</b> captivating them with tales of discovering hidden gems in its untouched wilderness.\n\n`,
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
                __html: `While climbing these mountains, you will <b>feel the thrill of scaling rocky summits</b> and <b>breathing in the crisp mountain air</b> as you gaze out over panoramic vistas that stretch as far as the eye can see.\n\n`,
            },
            {
                __html: `Or...\n\n`,
            },
        ],
        riverDescription: [
            {
                __html: `You can take a <b>boat ride, kayak, or swim</b> at the meeting point of two natural wonders.\n\n`,
            },
            {
                __html: `<b>Drežanka gracefully converges with the expansive Neretva Lake</b>, creating a harmonious union where flowing waters meet still expanses.\n\n`,
            },
            {
                __html: `Surrounded by lush vegetation and framed by towering mountains, this confluence exudes a sense of peacefulness and serenity.\n\n`,
            },
            {
                __html: `These tranquil emerald waters <b>give a calming and refreshing feeling to everyone</b> who experiences their natural beauty.`,
            },
        ],
        alter: "About Image",
    };
    const AboutVisitDreznica = {
        title: "",
        titleBold: "About Us",
        aboutUsDescription: [
            {
                __html: `Welcome to Visit Drežnica! We are a small family-owned and operated business, <b>serving tourists for over 8 years.</b>`,
            },
            {
                __html: `Led by Dino and his family, we offer cozy accommodations with stunning vistas in Drežnica.`,
            },
            {
                __html: `From <b>Dino's friendly demeanor to Sabina's culinary delights</b>, every moment with us is crafted to leave a lasting impression.`,
            },
            {
                __html: `Visit us and discover the <b>warm Bosnian hospitality firsthand.</b>`,
            },
        ],
        alter: "About Image",
    };
    return (
        <Container>
            <About content={AboutDreznica} />
            <Strip guestInfo={RawGuestReview} />
            <RoomEquipment />
            <Rooms />
            <Activities />
            <Review guestInfo={RawGuestReviewSecond} />
            <AboutUs content={AboutVisitDreznica} />
            <Galery />
        </Container>
    );
}
export default HomeFetch;

const Container = styled.div`
    overflow: hidden;
`;
