import HomePage from "@/components/Home/HomePage/HomePage";
import Head from "next/head";
import { Partytown } from "@builder.io/partytown";
export default function Home() {
    return (
        <>
            <Head>
                <title>My App</title>
                <Partytown debug={true} forward={["dataLayer.push"]} />
                <script
                    src="https://www.googletagmanager.com/gtag/js?id=G-F7SJPVW7G8"
                    type="text/partytown"
                    async
                />
                <script
                    type="text/partytown"
                    dangerouslySetInnerHTML={{
                        __html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-F7SJPVW7G8');",
                    }}
                />
            </Head>
            <main>
                <HomePage />
            </main>
        </>
    );
}
