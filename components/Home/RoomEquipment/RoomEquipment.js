import styled from "styled-components";
import {
    RoomsInclude as RawRoomsInclude,
    OutdoorsInclude as RawOutdoorsInclude,
    ServiceInclude as RawServiceInclude,
    BathroomInclude as RawBathroomInclude,
} from "../../../data/IncludeIcons";
import EquipmentIcons from "./EquipmentIcons";
import { useMemo } from "react";

function RoomEquipment() {
    const room = useMemo(() => ({
        normal: "Include:",
        bold: "All Rooms ",
    }), []);

    const outdoor = useMemo(() => ({
        normal: "",
        bold: "Outdoors:",
    }), []);

    const bathroom = useMemo(() => ({
        normal: "Includes: ",
        bold: "The Bathroom ",
    }), []);

    const service = useMemo(() => ({
        normal: "",
        bold: "Services:",
    }), []);

    const RoomsInclude = useMemo(() => RawRoomsInclude, []);
    const OutdoorsInclude = useMemo(() => RawOutdoorsInclude, []);
    const ServiceInclude = useMemo(() => RawServiceInclude, []);
    const BathroomInclude = useMemo(() => RawBathroomInclude, []);

    return (
        <Wrap>
            <Container>
                <EquipmentIcons title={room} content={RawRoomsInclude} />
                <EquipmentIcons title={outdoor} content={RawOutdoorsInclude} />
                <EquipmentIcons title={service} content={RawServiceInclude} />
                <EquipmentIcons title={bathroom} content={RawBathroomInclude} />
            </Container>
        </Wrap>
    );
}

export default RoomEquipment;

const Wrap = styled.div`
    background-color: #f0fff0;
    width: 100%;
    color: #525252;
    padding: 18px 0 36px 0;
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 850px) {
        width: 95%;
    }
`;
