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
                    strategy="beforeInteractive"
                    async
                />
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
