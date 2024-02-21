import Header from "@/components/universal/Heder/Header";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import Footer from "@/components/universal/Footer/Footer";
import ScrollToTopButton from "@/components/universal/ScrollButton/ScrollToTopButton";
import Head from "next/head";
import PlausibleProvider from "next-plausible";
export const metadata = {
    title: "Visit Drežnica | Rent a Room",
    description:
        "Drežnica near Mostart. Experience serene mountains, a picturesque river, and warm hospitality. Perfect for nature lovers seeking a peaceful getaway.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <StyledComponentsRegistry>
                <Head>
                    <PlausibleProvider domain="visitdreznica.netlify.app" />
                </Head>
                <body suppressHydrationWarning={true}>
                    <header>
                        <Header />
                    </header>
                    {children}
                    <ScrollToTopButton />
                    <footer>
                        <Footer />
                    </footer>
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
