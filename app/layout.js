import Header from "@/components/universal/Heder/Header";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import Footer from "@/components/universal/Footer/Footer";
import Script from "next/script";
import ScrollToTopButton from "@/components/universal/ScrollButton/ScrollToTopButton";
export const metadata = {
    title: "Visit Drežnica | Rent a Room",
    description:
        "Drežnica near Mostart. Experience serene mountains, a picturesque river, and warm hospitality. Perfect for nature lovers seeking a peaceful getaway.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <StyledComponentsRegistry>
                <body suppressHydrationWarning={true}>
                    <head>
                        <Script
                            src="https://www.googletagmanager.com/gtag/js?id=G-6TCDM52R17"
                            strategy="beforeInteractive"
                            async
                        />
                    </head>
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
