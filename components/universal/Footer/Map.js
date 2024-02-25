"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Map() {
    const [link, setLink] = useState("");
    const getMap = async () => {
        setTimeout(() => {
            setLink(
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2045.744180288838!2d17.737734467960276!3d43.52070770028315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b49b40024e361%3A0xb62f48c40b715b50!2sVISIT%20DREZNICA%20-%20info%20point!5e0!3m2!1sbs!2sba!4v1705833777320!5m2!1sbs!2sba",
                { passive: "true" }
            );
        }, 3000);
    };
    useEffect(() => {
        getMap();
    }, []);
    return (
        <StyledMap>
            <Location
                title="Location Map"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                src={link}
            />
        </StyledMap>
    );
}

export default Map;

const StyledMap = styled.div`
    flex: 1;
`;
const Location = styled.iframe`
    width: 100%;
    height: 100%;
    min-height: 400px;
    @media (max-width: 850px) {
        margin: 8px 0 0 0;
        min-height: 600px;
    }
    @media (max-width: 600px) {
        min-height: 400px;
    }
`;
