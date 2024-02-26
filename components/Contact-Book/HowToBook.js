import Body from "./Body";
function HowToBook({ data }) {
    const HowToBookBg = "/Background/HowToBookBg.webp";
    const HowToBookSide = "/General/HowToBookSide.webp";
    const HowToBookPhone = "/Background/HowToBookPhone.webp";
    const content = {
        title: "How To Book",
        text: "If you are interested in visiting Drežnica, you can book a room trough the Booking.com app:",
        showButton: true,
        showSecondText: true,
        secondText: "Or, send us a message or call here:",
        backgroundImg: HowToBookBg,
        sideImg: HowToBookSide,
        backgroundImgPhone: HowToBookPhone,
    };

    return (
        <div>
            <Body content={content} data={data} />
        </div>
    );
}

export default HowToBook;

export async function getStaticProps() {
    const data = await fetchData();
    return {
        props: {
            data,
        },
    };
}