import Body from "./Body";

function ContactUs({ data }) {
    const ContactBg = "/Background/ContactBg.webp";
    const ContactSide = "/General/ContactSide.webp";
    const ContactPhone = "/Background/ContactPhone.webp";
    const content = {
        title: "Contact Us",
        text: "If you still have questions about Drežnica, feel free to contact us here and we’ll respond to your question within 48 hours: ",
        showButton: false,
        showSecondText: false,
        secondText: "",
        backgroundImg: ContactBg,
        sideImg: ContactSide,
        backgroundImgPhone: ContactPhone,
    };

    return (
        <div>
            <Body content={content} data={data} />
        </div>
    );
}

export default ContactUs;

export async function getStaticProps() {
    const data = await fetchData();
    return {
        props: {
            data,
        },
    };
}