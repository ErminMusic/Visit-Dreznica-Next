import Hero from "@/components/Home/Hero/Hero";
import HomePage from "@/components/Home/HomePage/HomePage";
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
                <HomePage />
            </main>
        </>
    );
}
