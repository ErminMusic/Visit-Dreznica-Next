import HomePage from "@/components/Home/HomePage/HomePage";
import { Partytown } from "@builder.io/partytown/react";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <Partytown debug={true} forward={["dataLayer.push"]} />
                <script
                    src="https://www.googletagmanager.com/gtag/js?id=G-6TCDM52R17"
                    type="text/partytown"
                    async
                />
            </Head>
            <main>
                <HomePage />
            </main>
        </>
    );
}
