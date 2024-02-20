import HomePage from "@/components/Home/HomePage/HomePage";
import { Partytown } from "@builder.io/partytown/react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
    return (
        <>
            <Head>
                <Partytown debug={true} forward={["dataLayer.push"]} />

                <script
                    type="text/partytown"
                    dangerouslySetInnerHTML={{
                        __html: `
                                window.dataLayer = window.dataLayer || [];
                                window.gtag = function gtag(){window.dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-6TCDM52R17', { 
                                    page_path: window.location.pathname,
                                });
                            `,
                    }}
                />
            </Head>
            <main>
                <HomePage />
            </main>
        </>
    );
}
