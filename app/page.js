import HomePage from "@/components/Home/HomePage/HomePage";
import { Partytown } from "@builder.io/partytown/react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <Head>
                <title>Visit Drežnica | Rent a Room</title>
                <Partytown debug={true} forward={["dataLayer.push"]} />
                {/* <Script
                type="text/partytown"
                src="https://www.googletagmanager.com/gtag/js?id=G-6TCDM52R17"
                ></Script>
                <Script type="text/partytown">
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-6TCDM52R17');
                </Script> */}
            </Head>
            <main>
                <HomePage />
            </main>
        </>
    );
}
