import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/universal/Heder/Header";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import Footer from "@/components/universal/Footer/Footer";
import ScrollToTopButton from "@/components/universal/ScrollButton/ScrollToTopButton";
export const metadata = {
    title: "Visit Drežnica | Rent a Room",
    description:
        "Welcome to Drežnica. Experience serene mountains, a picturesque river, and warm hospitality. Perfect for nature lovers seeking a getaway. Book a room here!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <link rel="icon" href="/Icons/Logo.webp" sizes="32x32" />
                <link rel="preload" href="/Background/Hero.webp" as="image" />
                <link
                    rel="preload"
                    href="/Background/HeroPhone.webp"
                    as="image"
                />
                <link
                    rel="preload"
                    href="/Background/ContactBG.webp"
                    as="image"
                />
                <link
                    rel="preload"
                    href="/Background/ContactPhone.webp"
                    as="image"
                />
                <link
                    rel="preload"
                    href="/Background/HowToBookBG.webp"
                    as="image"
                />
                <link
                    rel="preload"
                    href="/Background/HowToBookPhone.webp"
                    as="image"
                />
            </head>
            <StyledComponentsRegistry>
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
            <GoogleAnalytics gaId="G-F7SJPVW7G8" />
        </html>
    );
}
