import HomePage from "@/components/Home/HomePage/HomePage";
import Head from "next/head";
import { Partytown } from "@builder.io/partytown";
import Script from "next/script";
export default function Home() {
    return (
        <>
            <Head>
                <title>My App</title>
                <Partytown debug={true} forward={["dataLayer.push"]} />
                <script
                    src="https://www.googletagmanager.com/gtag/js?id=G-6TCDM52R17"
                    type="text/partytown"
                    async
                />
                <script
                    type="text/partytown"
                    dangerouslySetInnerHTML={{
                        __html: "/* window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-6TCDM52R17'); */",
                    }}
                />
            </Head>
            <main>
                <HomePage />
            </main>
        </>
    );
}
