import { useEffect } from "react";

export default function useGoogleAnaltics() {
    useEffect(() => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
            console.log("[DEV]: Google Analytics are fat");
            // return false;
        }

        if (document) {
            let d = document;
            let primaryS = d.createElement("script");
            primaryS.setAttribute(
                "src",
                "https://www.googletagmanager.com/gtag/js?id=G-6TCDM52R17"
            );
            // primaryS.setAttribute("async", "true")

            let s = d.createElement("script");
            s.type = "text/partytown";
            s.innerText =
                "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-6TCDM52R17');";
            d.getElementsByTagName("head")[0].appendChild(primaryS);
            d.getElementsByTagName("head")[0].appendChild(s);
            window.dispatchEvent(new CustomEvent("ptupdate"));
        }
    }, []);
}
