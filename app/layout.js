import Header from "@/components/Heder/Header";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
export const metadata = {
    title: "Visit Drežnica | Rent a Room",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <StyledComponentsRegistry>
                <body suppressHydrationWarning={true}>
                    <header>
                        <Header />
                    </header>
                    {children}
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
