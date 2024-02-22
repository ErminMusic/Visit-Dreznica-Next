import HomePage from "@/components/Home/HomePage/HomePage";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Home() {
    return (
        <>
            <main>
                <HomePage />
            </main>
            <GoogleAnalytics gaId="G-F7SJPVW7G8" />
        </>
    );
}
