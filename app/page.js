import Heder from "@/components/Heder/Header";
import Hero from "@/components/Hero/Hero";
import { Partytown } from "@builder.io/partytown/react";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Visit Drežnica | Rent a Room</title>
                <Partytown debug={true} forward={["dataLayer.push"]} />
            </Head>
            <main>
                <Hero />
            </main>
        </>
    );
}
