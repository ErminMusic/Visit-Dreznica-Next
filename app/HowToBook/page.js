"use client";
import HowToBook from "@/components/Contact-Book/HowToBook";
import { Partytown } from "@builder.io/partytown/react";
import GoogleAnalyticTag from "@/components/Functions/GoogleAnalyticTag";

export default function page() {
    return (
        <>
            <Partytown
                debug={process.env.NODE_ENV === "development"}
                forward={["dataLayer.push"]}
            />
            <GoogleAnalyticTag>
                <div>
                    <HowToBook />
                </div>
            </GoogleAnalyticTag>
        </>
    );
}
