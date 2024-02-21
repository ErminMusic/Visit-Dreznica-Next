import HomePage from "@/components/Home/HomePage/HomePage";
import { Partytown } from "@builder.io/partytown/react";
import GoogleAnalyticTag from "@/components/Functions/GoogleAnalyticTag";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <Partytown
                    debug={process.env.NODE_ENV === "development"}
                    forward={["dataLayer.push"]}
                />
            </Head>

            <main>
                <GoogleAnalyticTag>
                    <HomePage />
                </GoogleAnalyticTag>
            </main>
        </>
    );
}
