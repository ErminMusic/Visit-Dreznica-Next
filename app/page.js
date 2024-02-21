import HomePage from "@/components/Home/HomePage/HomePage";
import { Partytown } from "@builder.io/partytown/react";
import GoogleAnalyticTag from "@/components/Functions/GoogleAnalyticTag";
export default function Home() {
    return (
        <>
            <Partytown
                debug={process.env.NODE_ENV === "development"}
                forward={["dataLayer.push"]}
            />
            <GoogleAnalyticTag>
                <main>
                    <HomePage />
                </main>
            </GoogleAnalyticTag>
        </>
    );
}
