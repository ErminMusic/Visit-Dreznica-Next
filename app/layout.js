import Header from "@/components/universal/Heder/Header";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import Footer from "@/components/universal/Footer/Footer";
import ScrollToTopButton from "@/components/universal/ScrollButton/ScrollToTopButton";
export const metadata = {
    title: "Visit Drežnica | Rent a Room",
    description:
        "Drežnica near Mostart. Experience serene mountains, a picturesque river, and warm hospitality. Perfect for nature lovers seeking a peaceful getaway.",
};
import { Partytown } from "@builder.io/partytown/react";
import GoogleAnalyticTag from "@/components/Functions/GoogleAnalyticTag";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <Partytown
                debug={process.env.NODE_ENV === "development"}
                forward={["dataLayer.push"]}
            />
            <StyledComponentsRegistry>
                <body suppressHydrationWarning={true}>
                    <header>
                        <Header />
                    </header>
                    {children}
                    {/* <GoogleAnalyticTag></GoogleAnalyticTag> */}
                    <ScrollToTopButton />
                    <footer>
                        <Footer />
                    </footer>
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
