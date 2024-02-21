"use client";
import React from "react";
import useGoogleAnaltics from "./useGoogleAnalytics";

export default function GoogleAnalyticTag({ children }) {
    useGoogleAnaltics();
    return <>{children}</>;
}
