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
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
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
                    <GoogleAnalytics gaId="G-F7SJPVW7G8" />
                </body>
            </StyledComponentsRegistry>
            {/* [[redirects]]
from = "/*"
to = "/index.html"
status = 200 */}
        </html>
    );
}
